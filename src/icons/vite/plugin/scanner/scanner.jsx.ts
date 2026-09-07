import { isIdentifierCharacter } from "./scanner.imports.js"
import type { TSourceState } from "./scanner.types.js"

/**
 * Проверяет, начинается ли с указанного индекса JSX-тег компонента иконки.
 *
 * @remarks
 * Символ `<` считается началом тега только в том случае, если сразу за ним (с учётом
 * пробельных символов) следует имя одного из компонентов, а следующий за именем символ
 * не является частью идентификатора. Например, для имени `Icon` тег `<Icon name="User" />`
 * распознаётся, а `<IconButton>` — нет, так как после `Icon` идёт буква `B`.
 *
 * Функция не отслеживает состояния строк и комментариев — это делает вызывающий код,
 * см. {@link findComponentTagStarts}.
 *
 * @param source - Исходный текст файла
 * @param index - Индекс символа `<`, с которого начинается проверка
 * @param componentNames - Список локальных имён Vite-компонента `Icon`
 * @returns `true`, если с указанного индекса начинается тег компонента иконки
 */
const isComponentTagStart = (source: string, index: number, componentNames: readonly string[]): boolean => {
	if (source[index] !== "<") {
		return false
	}

	let nameStart = index + 1

	while (/\s/u.test(source[nameStart] ?? "")) {
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
 * Обход выполняется лексически: содержимое строк в одинарных и двойных кавычках,
 * шаблонных строк и комментариев (`//` и блочных) полностью игнорируется, поэтому
 * `<Icon>` внутри строки или комментария не будет распознан как тег. Каждый кандидат
 * дополнительно проверяется через {@link isComponentTagStart}, что исключает
 * частичные совпадения имён.
 *
 * @example
 *
 * ```ts
 * const positions = findComponentTagStarts(source, ["Icon"])
 * ```
 *
 * @param source - Исходный текст файла
 * @param componentNames - Список локальных имён Vite-компонента `Icon`
 * @returns Массив индексов символов `<`, с которых начинаются теги компонентов
 */
export const findComponentTagStarts = (source: string, componentNames: readonly string[]): number[] => {
	if (componentNames.length === 0) {
		return []
	}

	const positions: number[] = []

	let state: TSourceState = "code"
	let escaped = false

	for (let index = 0; index < source.length; index += 1) {
		const character = source[index]
		const nextCharacter = source[index + 1]

		if (state === "line-comment") {
			if (character === "\n" || character === "\r") {
				state = "code"
			}

			continue
		}

		if (state === "block-comment") {
			if (character === "*" && nextCharacter === "/") {
				state = "code"
				index += 1
			}

			continue
		}

		if (state === "single-quote") {
			if (escaped) {
				escaped = false
				continue
			}

			if (character === "\\") {
				escaped = true
				continue
			}

			if (character === "'") {
				state = "code"
			}

			continue
		}

		if (state === "double-quote") {
			if (escaped) {
				escaped = false
				continue
			}

			if (character === "\\") {
				escaped = true
				continue
			}

			if (character === '"') {
				state = "code"
			}

			continue
		}

		if (state === "template") {
			if (escaped) {
				escaped = false
				continue
			}

			if (character === "\\") {
				escaped = true
				continue
			}

			if (character === "`") {
				state = "code"
			}

			continue
		}

		if (character === "/" && nextCharacter === "/") {
			state = "line-comment"
			index += 1
			continue
		}

		if (character === "/" && nextCharacter === "*") {
			state = "block-comment"
			index += 1
			continue
		}

		if (character === "'") {
			state = "single-quote"
			continue
		}

		if (character === '"') {
			state = "double-quote"
			continue
		}

		if (character === "`") {
			state = "template"
			continue
		}

		if (character === "<" && isComponentTagStart(source, index, componentNames)) {
			positions.push(index)
		}
	}

	return positions
}

/**
 * Находит индекс закрывающей угловой скобки открывающего JSX-тега.
 *
 * @remarks
 * Поиск учитывает содержимое строк и шаблонных строк, а также глубину вложенности
 * фигурных скобок `{}` JSX-выражений: угловая скобка внутри выражения (например,
 * в стрелочной функции `{() => <span />}`) не считается концом тега.
 *
 * @param source - Исходный текст файла
 * @param startIndex - Индекс символа `<`, с которого начинается тег
 * @returns Индекс символа `>`, закрывающего тег, или `-1`, если конец тега не найден
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
 *
 * @remarks
 * Поддерживаются строковые литералы и строковые выражения:
 * `name="User"`, `name='User'`, `name={"User"}` и шаблонные строки без
 * подстановок. Динамические выражения, например `name={icon.name}`,
 * вернут `null`.
 *
 * @param openingTag - Текст открывающего тега от `<` до `>`
 * @returns Значение атрибута `name` или `null`, если статическое имя не задано
 */
export const parseStaticName = (openingTag: string): string | null => {
	const quotedAttribute = /\bname\s*=\s*(["'])(.*?)\1/su.exec(openingTag)

	if (quotedAttribute) {
		return quotedAttribute[2].trim()
	}

	const expressionAttribute = /\bname\s*=\s*\{\s*(?:(["'])(.*?)\1|`([^`${}]*)`)\s*\}/su.exec(openingTag)

	if (!expressionAttribute) {
		return null
	}

	return (expressionAttribute[2] ?? expressionAttribute[3] ?? "").trim()
}

/**
 * Проверяет, присутствует ли у открывающего JSX-тега атрибут `name`.
 *
 * @param openingTag - Текст открывающего тега от `<` до `>`
 * @returns `true`, если атрибут `name` присутствует
 */
export const hasNameAttribute = (openingTag: string): boolean => /\bname\s*=/u.test(openingTag)
