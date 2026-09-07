import { isIdentifierCharacter, isWhitespace, walkCode } from "./scanner.lexical.js"
import { REGEX } from "./scanner.regex.js"

/**
 * Проверяет, начинается ли с указанного индекса JSX-тег компонента иконки.
 */
const isComponentTagStart = (source: string, index: number, componentNames: readonly string[]): boolean => {
	if (source[index] !== "<") {
		return false
	}

	let nameStart = index + 1

	while (isWhitespace(source[nameStart])) {
		nameStart += 1
	}

	for (const componentName of componentNames) {
		if (!source.startsWith(componentName, nameStart)) {
			continue
		}

		const nextCharacter = source[nameStart + componentName.length]

		if (!isIdentifierCharacter(nextCharacter)) {
			return true
		}
	}

	return false
}

/**
 * Находит позиции всех JSX-тегов компонентов иконок в исходном тексте.
 *
 * @remarks
 * Общий lexical walker игнорирует комментарии, строки, template literals
 * и RegExp literals, поэтому ложные `<Icon>` внутри них не учитываются.
 */
export const findComponentTagStarts = (source: string, componentNames: readonly string[]): number[] => {
	if (componentNames.length === 0) {
		return []
	}

	const positions: number[] = []

	walkCode(source, ({ character, index }) => {
		if (character === "<" && isComponentTagStart(source, index, componentNames)) {
			positions.push(index)
		}
	})

	return positions
}

/**
 * Находит индекс закрывающей угловой скобки открывающего JSX-тега.
 *
 * @remarks
 * Поиск учитывает содержимое строк и шаблонных строк, а также глубину вложенности
 * фигурных скобок `{}` JSX-выражений.
 */
export const findTagEnd = (source: string, startIndex: number): number => {
	let quote: "'" | '"' | "`" | null = null
	let escaped = false
	let braceDepth = 0

	for (let index = startIndex; index < source.length; index += 1) {
		const character = source[index]

		if (quote) {
			if (escaped) {
				escaped = false
				continue
			}

			if (character === "\\") {
				escaped = true
				continue
			}

			if (character === quote) {
				quote = null
			}

			continue
		}

		if (character === "'" || character === '"' || character === "`") {
			quote = character
			continue
		}

		if (character === "{") {
			braceDepth += 1
			continue
		}

		if (character === "}") {
			braceDepth = Math.max(0, braceDepth - 1)
			continue
		}

		if (character === ">" && braceDepth === 0) {
			return index
		}
	}

	return -1
}

/**
 * Извлекает статическое значение атрибута `name` из открывающего JSX-тега.
 */
export const parseStaticName = (openingTag: string): string | null => {
	const quotedAttribute = REGEX.JSX.STATIC_QUOTED_NAME.exec(openingTag)

	if (quotedAttribute) {
		return quotedAttribute[2].trim()
	}

	const expressionAttribute = REGEX.JSX.STATIC_EXPRESSION_NAME.exec(openingTag)

	if (!expressionAttribute) {
		return null
	}

	return (expressionAttribute[2] ?? expressionAttribute[3] ?? "").trim()
}

/**
 * Проверяет, присутствует ли у открывающего JSX-тега атрибут `name`.
 */
export const hasNameAttribute = (openingTag: string): boolean => REGEX.JSX.NAME_ATTRIBUTE.test(openingTag)
