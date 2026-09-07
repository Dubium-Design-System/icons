import { isIdentifierCharacter, walkCode } from "./scanner.lexical.js"
import { REGEX } from "./scanner.regex.js"

/**
 * Идентификатор публичного entry point Vite API.
 */
const VITE_IMPORT_ID = "@dubium/icons/vite"

/**
 * Проверяет границы ключевого слова в исходном коде.
 */
const isKeywordAt = (source: string, index: number, keyword: string): boolean => {
	if (!source.startsWith(keyword, index)) {
		return false
	}

	const previousCharacter = source[index - 1]
	const nextCharacter = source[index + keyword.length]

	const isValidKeyword = !isIdentifierCharacter(previousCharacter) && !isIdentifierCharacter(nextCharacter)

	return isValidKeyword
}

/**
 * Удаляет комментарии из содержимого списка named imports.
 */
const removeImportComments = (value: string): string => {
	return value.replace(REGEX.COMMENTS.MULTILINE, " ").replace(REGEX.COMMENTS.SINGLE_LINE, " ")
}

/**
 * Пытается разобрать named import из `@dubium/icons/vite`.
 */
const parseDubiumIconImportAt = (
	source: string,
	index: number,
): { componentNames: readonly string[]; endIndex: number } | null => {
	const importSource = source.slice(index)

	const match = REGEX.IMPORT.STATEMENT.exec(importSource)

	if (!match) {
		return null
	}

	const [_, rawSpecifiers, , moduleId] = match

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

		const iconImport = REGEX.IMPORT.ICON_SPECIFIER.exec(specifier)

		if (!iconImport) {
			continue
		}

		componentNames.push(iconImport[1] ?? "Icon")
	}

	return {
		componentNames,
		endIndex: index + match[0].length,
	}
}

/**
 * Определяет локальные имена компонента `Icon`, реально импортированного
 * из `@dubium/icons/vite`.
 */
export const findImportedIconComponentNames = (source: string): string[] => {
	const names = new Set<string>()

	walkCode(source, ({ index, skipTo }) => {
		if (!isKeywordAt(source, index, "import")) {
			return
		}

		const parsedImport = parseDubiumIconImportAt(source, index)

		if (!parsedImport) {
			return
		}

		for (const importedName of parsedImport.componentNames) {
			names.add(importedName)
		}

		skipTo(parsedImport.endIndex)
	})

	return [...names]
}
