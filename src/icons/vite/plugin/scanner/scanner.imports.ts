import { findRegexLiteralEnd } from "./scanner.lexical.js"
import type { TSourceState } from "./scanner.types.js"

/**
 * Идентификатор публичного entry point Vite API.
 *
 * @remarks
 * Scanner отслеживает `Icon`, импортированный именно из этого модуля,
 * включая alias (`import { Icon as DubiumIcon }`).
 */
const VITE_IMPORT_ID = "@dubium/icons/vite"

/**
 * Проверяет, может ли символ быть частью JS/JSX-идентификатора.
 *
 * @param character - Проверяемый символ
 * @returns `true`, если символ допустим внутри идентификатора
 */
export const isIdentifierCharacter = (character: string | undefined): boolean =>
	character !== undefined && /[A-Za-z0-9_$]/u.test(character)

/**
 * Проверяет границы ключевого слова в исходном коде.
 *
 * @remarks
 * Ключевое слово считается самостоятельным, если слева и справа от него
 * нет символов идентификатора.
 *
 * @param source - Исходный текст
 * @param index - Начальная позиция ключевого слова
 * @param keyword - Проверяемое ключевое слово
 * @returns `true`, если в позиции находится самостоятельное ключевое слово
 */
const isKeywordAt = (source: string, index: number, keyword: string): boolean => {
	if (!source.startsWith(keyword, index)) {
		return false
	}

	const previousCharacter = source[index - 1]
	const nextCharacter = source[index + keyword.length]

	return !isIdentifierCharacter(previousCharacter) && !isIdentifierCharacter(nextCharacter)
}

/**
 * Удаляет комментарии из содержимого списка named imports.
 *
 * @param value - Содержимое между `{` и `}`
 * @returns Строка без комментариев
 */
const removeImportComments = (value: string): string =>
	value.replace(/\/\*[\s\S]*?\*\//gu, " ").replace(/\/\/[^\r\n]*/gu, " ")

/**
 * Пытается разобрать named import из `@dubium/icons/vite`.
 *
 * @remarks
 * Поддерживаются:
 *
 * ```ts
 * import { Icon } from "@dubium/icons/vite"
 * import { Icon as DubiumIcon } from "@dubium/icons/vite"
 * import {
 * 	Icon as AppIcon,
 * 	IconProvider,
 * } from "@dubium/icons/vite"
 * ```
 *
 * Type-only импорты не считаются React-компонентами.
 *
 * @param source - Исходный текст
 * @param index - Позиция ключевого слова `import`
 * @returns Локальные имена импортированного `Icon` или `null`
 */
const parseDubiumIconImportAt = (source: string, index: number): readonly string[] | null => {
	const importSource = source.slice(index)

	const match = /^import\s*\{([\s\S]*?)\}\s*from\s*(["'])([^"']+)\2/u.exec(importSource)

	if (!match) {
		return null
	}

	const [, rawSpecifiers, , moduleId] = match

	if (moduleId !== VITE_IMPORT_ID) {
		return null
	}

	const componentNames: string[] = []
	const specifiers = removeImportComments(rawSpecifiers).split(",")

	for (const rawSpecifier of specifiers) {
		const specifier = rawSpecifier.trim()

		if (!specifier || specifier.startsWith("type ")) {
			continue
		}

		const iconImport = /^Icon(?:\s+as\s+([A-Za-z_$][A-Za-z0-9_$]*))?$/u.exec(specifier)

		if (!iconImport) {
			continue
		}

		componentNames.push(iconImport[1] ?? "Icon")
	}

	return componentNames
}

/**
 * Определяет локальные имена компонента `Icon`, реально импортированного
 * из `@dubium/icons/vite`.
 *
 * @remarks
 * Импорты внутри комментариев и строк игнорируются. Импорт `Icon` из другой
 * библиотеки не учитывается.
 *
 * Например:
 *
 * ```ts
 * import { Icon } from "@dubium/icons/vite"
 * ```
 *
 * вернёт `["Icon"]`, а:
 *
 * ```ts
 * import { Icon as DubiumIcon } from "@dubium/icons/vite"
 * ```
 *
 * вернёт `["DubiumIcon"]`.
 *
 * @param source - Исходный текст файла
 * @returns Локальные имена Vite-компонента `Icon`
 */
export const findImportedIconComponentNames = (source: string): string[] => {
	const names = new Set<string>()

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

		if (character === "/") {
			const regexEnd = findRegexLiteralEnd(source, index)

			if (regexEnd !== null) {
				index = regexEnd - 1
				continue
			}
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

		if (!isKeywordAt(source, index, "import")) {
			continue
		}

		const importedNames = parseDubiumIconImportAt(source, index)

		if (!importedNames) {
			continue
		}

		for (const importedName of importedNames) {
			names.add(importedName)
		}
	}

	return [...names]
}
