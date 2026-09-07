import { findImportedIconComponentNames } from "./scanner.imports.js"
import { findComponentTagStarts, findTagEnd, hasNameAttribute, parseStaticName } from "./scanner.jsx.js"
import { scanPropertyNames } from "./scanner.properties.js"
import type { ScanResult } from "./scanner.types.js"

/**
 * Сканирует исходник и собирает статические имена иконок.
 *
 * @remarks
 * `Icon`, импортированный из `@dubium/icons/vite`, определяется автоматически,
 * включая import alias. Дополнительные component names можно явно передать
 * через `additionalComponentNames`.
 *
 * JSX-теги и propertyNames внутри комментариев и JavaScript-строк
 * игнорируются.
 *
 * @param source - Исходный текст файла
 * @param additionalComponentNames - Дополнительные имена компонентов-иконок
 * @param propertyNames - Имена свойств со строковыми ссылками на иконки
 * @returns Результат сканирования: найденные имена и число динамических
 */
export const scanSource = (
	source: string,
	additionalComponentNames: readonly string[],
	propertyNames: readonly string[],
): ScanResult => {
	const icons = new Set<string>()

	const importedComponentNames = findImportedIconComponentNames(source)

	const componentNames = [...new Set([...importedComponentNames, ...additionalComponentNames])]

	const tagStarts = findComponentTagStarts(source, componentNames)

	let dynamicNames = 0

	for (const tagStart of tagStarts) {
		const tagEnd = findTagEnd(source, tagStart)

		if (tagEnd === -1) {
			continue
		}

		const openingTag = source.slice(tagStart, tagEnd + 1)

		const iconName = parseStaticName(openingTag)

		if (iconName) {
			icons.add(iconName)
			continue
		}

		if (hasNameAttribute(openingTag)) {
			dynamicNames += 1
		}
	}

	scanPropertyNames(source, propertyNames, icons)

	return {
		dynamicNames,
		icons,
	}
}
