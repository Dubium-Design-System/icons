import { isIdentifierCharacter } from "./scanner.imports.js"
import type { TSourceState } from "./scanner.types.js"

/**
 * Пропускает пробельные символы и комментарии, начиная с указанного индекса.
 *
 * @remarks
 * Обрабатываются пробелы, табуляция, переносы строк, строчные комментарии `//`
 * и блочные комментарии. Функция останавливается на первом значимом символе.
 *
 * @param source - Исходный текст файла
 * @param startIndex - Индекс, с которого начинается пропуск
 * @returns Индекс первого значимого символа после пробелов и комментариев
 */
const skipWhitespaceAndComments = (source: string, startIndex: number): number => {
	let index = startIndex

	while (index < source.length) {
		const character = source[index]
		const nextCharacter = source[index + 1]

		if (/\s/u.test(character)) {
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
 *
 * @remarks
 * Экранирование через обратную косую черту учитывается, поэтому экранированная
 * кавычка не завершает строку. Возвращаемое значение обрезается по краям.
 * Если строка не закрыта или содержит перенос строки, возвращается `null`.
 *
 * @param source - Исходный текст файла
 * @param startIndex - Индекс открывающей кавычки
 * @returns Индекс символа после закрывающей кавычки и значение строки,
 * либо `null`, если строковый литерал невалиден
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
 * Проверяет, что по указанному индексу начинается имя свойства-идентификатора.
 *
 * @remarks
 * Имя должно быть окружено символами, не являющимися частью идентификатора:
 * `iconName` распознаётся как имя свойства, а `myIconName` — нет.
 *
 * @param source - Исходный текст файла
 * @param index - Индекс начала имени свойства
 * @param propertyName - Искомое имя свойства
 * @returns Индекс символа после имени свойства или `null`, если имя не совпало
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
 * Проверяет, что по указанному индексу начинается имя свойства в виде строкового литерала.
 *
 * @example
 *
 * Для свойства `iconName` фрагмент `"iconName": "User"` будет распознан,
 * а `"prefixIconName"` — нет.
 *
 * @param source - Исходный текст файла
 * @param index - Индекс открывающей кавычки
 * @param propertyName - Искомое имя свойства
 * @returns Индекс символа после закрывающей кавычки или `null`, если имя не совпало
 */
const matchQuotedPropertyName = (source: string, index: number, propertyName: string): number | null => {
	const parsed = readQuotedString(source, index)

	if (!parsed || parsed.value !== propertyName) {
		return null
	}

	return parsed.endIndex
}

/**
 * Пытается распознать свойство с одним из указанных имён по заданному индексу.
 *
 * @remarks
 * Поддерживаются две формы записи имени свойства:
 * - идентификатор: `iconName: "User"`;
 * - строковый литерал: `"iconName": "User"` или `'iconName': 'User'`.
 *
 * Между именем и двоеточием, а также между двоеточием и значением допускаются
 * пробелы и комментарии. Значение обязательно должно быть непустой строкой.
 *
 * @param source - Исходный текст файла
 * @param index - Индекс начала имени свойства
 * @param propertyNames - Список искомых имён свойств
 * @returns Индекс конца значения и само значение, либо `null`, если свойство не распознано
 */
const parsePropertyAt = (
	source: string,
	index: number,
	propertyNames: readonly string[],
): { endIndex: number; value: string } | null => {
	for (const propertyName of propertyNames) {
		let afterPropertyName: number | null = null

		if (source[index] === "'" || source[index] === '"') {
			afterPropertyName = matchQuotedPropertyName(source, index, propertyName)
		} else {
			afterPropertyName = matchIdentifierPropertyName(source, index, propertyName)
		}

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
 * Обход выполняется лексически: содержимое строк, шаблонных строк и комментариев
 * игнорируется, поэтому `{"iconName": "Fake"}` внутри строки не попадёт в результат.
 * Каждое найденное непустое значение добавляется в переданное множество.
 *
 * @param source - Исходный текст файла
 * @param propertyNames - Список имён свойств, значения которых собираются
 * @param icons - Множество, в которое добавляются найденные имена иконок
 * @returns Ничего; результат накапливается в параметре `icons`
 */
export const scanPropertyNames = (source: string, propertyNames: readonly string[], icons: Set<string>): void => {
	if (propertyNames.length === 0) {
		return
	}

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

		if (character === "'" || character === '"') {
			const property = parsePropertyAt(source, index, propertyNames)

			if (property) {
				icons.add(property.value)
				index = property.endIndex - 1
				continue
			}

			state = character === "'" ? "single-quote" : "double-quote"
			continue
		}

		if (character === "`") {
			state = "template"
			continue
		}

		const property = parsePropertyAt(source, index, propertyNames)

		if (property) {
			icons.add(property.value)
			index = property.endIndex - 1
		}
	}
}
