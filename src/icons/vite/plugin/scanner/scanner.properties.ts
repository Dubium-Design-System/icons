import { isIdentifierCharacter, isWhitespace, walkCode } from "./scanner.lexical.js"

/**
 * Пропускает пробельные символы и комментарии, начиная с указанного индекса.
 */
const skipWhitespaceAndComments = (source: string, startIndex: number): number => {
	let index = startIndex

	while (index < source.length) {
		const character = source[index]
		const nextCharacter = source[index + 1]

		if (isWhitespace(character)) {
			index += 1
			continue
		}

		if (character === "/" && nextCharacter === "/") {
			index += 2

			while (index < source.length && source[index] !== "\n" && source[index] !== "\r") {
				index += 1
			}

			continue
		}

		if (character === "/" && nextCharacter === "*") {
			index += 2

			while (index < source.length) {
				if (source[index] === "*" && source[index + 1] === "/") {
					index += 2
					break
				}

				index += 1
			}

			continue
		}

		break
	}

	return index
}

/**
 * Читает строковый литерал в одинарных или двойных кавычках.
 */
const readQuotedString = (source: string, startIndex: number): { endIndex: number; value: string } | null => {
	const quote = source[startIndex]

	if (quote !== "'" && quote !== '"') {
		return null
	}

	let value = ""
	let escaped = false

	for (let index = startIndex + 1; index < source.length; index += 1) {
		const character = source[index]

		if (escaped) {
			value += character
			escaped = false
			continue
		}

		if (character === "\\") {
			escaped = true
			continue
		}

		if (character === quote) {
			return {
				endIndex: index + 1,
				value: value.trim(),
			}
		}

		if (character === "\n" || character === "\r") {
			return null
		}

		value += character
	}

	return null
}

/**
 * Проверяет имя свойства-идентификатора.
 */
const matchIdentifierPropertyName = (source: string, index: number, propertyName: string): number | null => {
	if (!source.startsWith(propertyName, index)) {
		return null
	}

	const previousCharacter = source[index - 1]
	const nextCharacter = source[index + propertyName.length]

	if (isIdentifierCharacter(previousCharacter) || isIdentifierCharacter(nextCharacter)) {
		return null
	}

	return index + propertyName.length
}

/**
 * Проверяет имя свойства в виде строкового литерала.
 */
const matchQuotedPropertyName = (source: string, index: number, propertyName: string): number | null => {
	const parsed = readQuotedString(source, index)

	if (!parsed || parsed.value !== propertyName) {
		return null
	}

	return parsed.endIndex
}

/**
 * Пытается распознать свойство с одним из указанных имён.
 */
const parsePropertyAt = (
	source: string,
	index: number,
	propertyNames: readonly string[],
): { endIndex: number; value: string } | null => {
	for (const propertyName of propertyNames) {
		const isQuotedPropertyName = ["'", '"'].includes(source[index] ?? "")

		const afterPropertyName = isQuotedPropertyName
			? matchQuotedPropertyName(source, index, propertyName)
			: matchIdentifierPropertyName(source, index, propertyName)

		if (afterPropertyName === null) {
			continue
		}

		let cursor = skipWhitespaceAndComments(source, afterPropertyName)

		if (source[cursor] !== ":") {
			continue
		}

		cursor = skipWhitespaceAndComments(source, cursor + 1)

		const parsedValue = readQuotedString(source, cursor)

		if (!parsedValue?.value) {
			continue
		}

		return {
			endIndex: parsedValue.endIndex,
			value: parsedValue.value,
		}
	}

	return null
}

/**
 * Находит значения перечисленных свойств и добавляет их в множество имён иконок.
 *
 * @remarks
 * Общий lexical walker игнорирует содержимое комментариев, строк,
 * template literals и RegExp literals. Открывающая кавычка при этом доступна
 * visitor-у, поэтому поддерживаются строковые ключи вида `"iconName": "User"`.
 */
export const scanPropertyNames = (source: string, propertyNames: readonly string[], icons: Set<string>): void => {
	if (propertyNames.length === 0) {
		return
	}

	walkCode(source, ({ index, skipTo }) => {
		const property = parsePropertyAt(source, index, propertyNames)

		if (!property) {
			return
		}

		icons.add(property.value)
		skipTo(property.endIndex)
	})
}
