import { lazy } from "react"

import { ICON_FILE_SUFFIX } from "./constants.js"

import type { TIconItem, TIconModule, TIconVariant } from "./types.js"

/**
 * Vite создаёт dynamic import для каждого generated-компонента.
 *
 * Иконки не попадают синхронно в основной demo bundle.
 */
const iconModules = import.meta.glob<TIconModule>("../icons/collection/*Icon.tsx")

/**
 * Возвращает имя файла из Vite glob path.
 *
 * @param path Путь generated-модуля.
 * @returns Имя файла.
 */
const getFileName = (path: string): string => {
	return path.split("/").at(-1) ?? path
}

/**
 * Получает публичное имя из generated filename.
 *
 * @example
 * ```text
 * UserOutlineIcon.tsx
 * -> UserOutline
 *
 * 123FilledIcon.tsx
 * -> 123Filled
 * ```
 *
 * @param fileName Имя файла.
 * @returns Публичное имя.
 */
const getIconName = (fileName: string): string => {
	return fileName.slice(0, -ICON_FILE_SUFFIX.length)
}

/**
 * Определяет категорию по generated-суффиксу.
 *
 * @param name Публичное имя.
 * @returns Категория.
 */
const getIconVariant = (name: string): TIconVariant => {
	if (name.endsWith("Outline")) {
		return "outline"
	}

	if (name.endsWith("Filled")) {
		return "filled"
	}

	return "colors"
}

/**
 * Формирует валидное имя React-компонента.
 *
 * Логика совпадает с `sync-icons.mjs`.
 *
 * @param name Публичное имя.
 * @returns Имя компонента.
 */
const getComponentName = (name: string): string => {
	const startsWithDigit = /^\d/u.test(name)

	return startsWithDigit ? `_${name}Icon` : `${name}Icon`
}

/**
 * Полный demo-каталог.
 *
 * Metadata создаётся синхронно,
 * но сами модули иконок загружаются только при render.
 */
export const icons: TIconItem[] = Object.entries(iconModules)
	.map(([path, loader]) => {
		const fileName = getFileName(path)

		if (!fileName.endsWith(ICON_FILE_SUFFIX)) {
			throw new Error(`Некорректное имя generated-файла: ${fileName}`)
		}

		const name = getIconName(fileName)

		const componentName = getComponentName(name)

		const variant = getIconVariant(name)

		return {
			name,
			componentName,
			variant,
			Component: lazy(loader),
			searchValue: `${name} ${componentName}`.toLowerCase(),
		}
	})
	.sort((a, b) => a.name.localeCompare(b.name))
