import { REGEX } from "./scanner.regex.js"

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

type TSourceState = "code" | "single-quote" | "double-quote" | "template" | "line-comment" | "block-comment"

/**
 * Контекст одного значимого символа исходного кода.
 *
 * @internal
 */
export interface ICodeWalkerContext {
	/** Текущий символ. */
	character: string

	/** Индекс текущего символа в исходном тексте. */
	index: number

	/** Следующий символ, если он существует. */
	nextCharacter: string | undefined

	/**
	 * Перемещает обход к указанному индексу.
	 *
	 * Полезно, когда visitor уже разобрал целую конструкцию и повторный
	 * посимвольный обход её содержимого не нужен.
	 */
	skipTo: (index: number) => void
}

/**
 * Проверяет, является ли символ пробельным.
 *
 * @internal
 */
export const isWhitespace = (character: string | undefined): boolean => {
	return character !== undefined && REGEX.WHITESPACE.test(character)
}

/**
 * Проверяет, может ли символ быть частью JS/JSX-идентификатора.
 *
 * @internal
 */
export const isIdentifierCharacter = (character: string | undefined): boolean => {
	return character !== undefined && REGEX.IDENTIFIER.CHARACTER.test(character)
}

/**
 * Проверяет, может ли `/` в указанной позиции начинать RegExp literal.
 *
 * @internal
 */
const canStartRegexLiteral = (source: string, index: number): boolean => {
	let cursor = index - 1

	while (cursor >= 0 && isWhitespace(source[cursor])) {
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

		while (REGEX.REGEX_FLAG.test(source[endIndex] ?? "")) {
			endIndex += 1
		}

		return endIndex
	}

	return null
}

/**
 * Обходит только значимые позиции JavaScript/TypeScript-кода.
 *
 * @remarks
 * Общая state-machine централизованно игнорирует содержимое комментариев,
 * строк, template literals и RegExp literals. Visitor вызывается для обычного
 * кода и для открывающей кавычки строки — это позволяет отдельным сканерам
 * распознавать строковые ключи объектов, не дублируя lexer.
 *
 * Visitor может вызвать `skipTo(index)`, если уже разобрал конструкцию целиком.
 * Тогда следующий вызов visitor произойдёт с указанного индекса.
 *
 * @param source - Исходный текст файла
 * @param visitor - Обработчик значимых позиций
 */
export const walkCode = (source: string, visitor: (context: ICodeWalkerContext) => void): void => {
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

		if (state === "single-quote" || state === "double-quote" || state === "template") {
			if (escaped) {
				escaped = false
				continue
			}

			if (character === "\\") {
				escaped = true
				continue
			}

			const closingCharacter = state === "single-quote" ? "'" : state === "double-quote" ? '"' : "`"

			if (character === closingCharacter) {
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

		if (character === "/") {
			const regexEnd = findRegexLiteralEnd(source, index)

			if (regexEnd !== null) {
				index = regexEnd - 1
				continue
			}
		}

		let nextIndex: number | null = null

		visitor({
			character,
			index,
			nextCharacter,
			skipTo: (targetIndex) => {
				nextIndex = Math.max(index + 1, targetIndex)
			},
		})

		if (nextIndex !== null) {
			index = nextIndex - 1
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
		}
	}
}
