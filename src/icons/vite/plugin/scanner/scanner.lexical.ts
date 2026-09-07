/**
 * Ключевые слова, после которых `/` может начинать RegExp literal.
 *
 * @internal
 */
const REGEX_PREFIX_KEYWORDS = new Set([
	"await",
	"case",
	"delete",
	"do",
	"else",
	"in",
	"instanceof",
	"of",
	"return",
	"throw",
	"typeof",
	"void",
	"yield",
])

/**
 * Символы, после которых `/` обычно начинает выражение, а не оператор деления.
 *
 * @internal
 */
const REGEX_PREFIX_CHARACTERS = new Set([
	"(",
	"{",
	"[",
	",",
	";",
	":",
	"=",
	"!",
	"?",
	"&",
	"|",
	"+",
	"-",
	"*",
	"%",
	"^",
	"~",
	"<",
	">",
])

const isIdentifierCharacter = ( character: string | undefined ): boolean => {
	return character !== undefined && /[A-Za-z0-9_$]/u.test(character)
}

/**
 * Проверяет, может ли `/` в указанной позиции начинать RegExp literal.
 *
 * @remarks
 * JavaScript использует один и тот же символ для RegExp literal и деления.
 * Для сканера достаточно определить контекст начала выражения: начало файла,
 * оператор/разделитель либо ключевое слово вроде `return` или `throw`.
 *
 * @param source - Исходный текст
 * @param index - Индекс символа `/`
 * @returns `true`, если `/` может начинать RegExp literal
 *
 * @internal
 */
const canStartRegexLiteral = (source: string, index: number): boolean => {
	let cursor = index - 1

	while (cursor >= 0 && /\s/u.test(source[cursor] ?? "")) {
		cursor -= 1
	}

	if (cursor < 0) {
		return true
	}

	const previousCharacter = source[cursor]

	if (REGEX_PREFIX_CHARACTERS.has(previousCharacter)) {
		return true
	}

	if (!isIdentifierCharacter(previousCharacter)) {
		return false
	}

	let wordStart = cursor

	while (wordStart > 0 && isIdentifierCharacter(source[wordStart - 1])) {
		wordStart -= 1
	}

	return REGEX_PREFIX_KEYWORDS.has(source.slice(wordStart, cursor + 1))
}

/**
 * Если в указанной позиции начинается JavaScript RegExp literal,
 * возвращает индекс сразу после литерала и его флагов.
 *
 * @remarks
 * Учитывает escape-последовательности и character classes (`[...]`).
 * Комментарии `//` и `/* ... *\/` здесь не обрабатываются — вызывающий lexer
 * должен проверить их раньше.
 *
 * @param source - Исходный текст
 * @param startIndex - Индекс предполагаемого открывающего `/`
 * @returns Индекс после RegExp literal или `null`, если это не RegExp literal
 */
export const findRegexLiteralEnd = (source: string, startIndex: number): number | null => {
	if (source[startIndex] !== "/") {
		return null
	}

	const nextCharacter = source[startIndex + 1]

	if (nextCharacter === "/" || nextCharacter === "*") {
		return null
	}

	if (!canStartRegexLiteral(source, startIndex)) {
		return null
	}

	let escaped = false
	let inCharacterClass = false

	for (let index = startIndex + 1; index < source.length; index += 1) {
		const character = source[index]

		if (character === "\n" || character === "\r") {
			return null
		}

		if (escaped) {
			escaped = false
			continue
		}

		if (character === "\\") {
			escaped = true
			continue
		}

		if (character === "[") {
			inCharacterClass = true
			continue
		}

		if (character === "]" && inCharacterClass) {
			inCharacterClass = false
			continue
		}

		if (character !== "/" || inCharacterClass) {
			continue
		}

		let endIndex = index + 1

		while (/[A-Za-z]/u.test(source[endIndex] ?? "")) {
			endIndex += 1
		}

		return endIndex
	}

	return null
}
