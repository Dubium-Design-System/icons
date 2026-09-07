import { basename, extname, resolve } from "node:path"

import type { TDubiumIconSource } from "../plugin.types.js"
import { getSourceFiles, normalizePath } from "./sources.files.js"
import type { ILocalSourceCatalog } from "./sources.types.js"

/**
 * Строит локальный каталог иконок из файлов в директории.
 *
 * @remarks
 * Имя иконки получается из имени файла вычитанием суффикса.
 * Например, `UserIcon.tsx` при суффиксе `Icon` даёт имя `User`.
 *
 * @param root - Корень Vite-проекта
 * @param source - Настройки локального источника
 * @returns Каталог иконок с путями к компонентам
 * @throws Если в одном local source найдены две иконки с одинаковым именем
 */
export const buildLocalCatalog = async (
	root: string,
	source: Extract<TDubiumIconSource, { type: "local" }>,
): Promise<ILocalSourceCatalog> => {
	const absolutePath = resolve(root, source.path)
	const suffix = source.suffix ?? "Icon"
	const files = await getSourceFiles(absolutePath)

	const icons = new Map<string, string>()

	for (const file of files) {
		const extension = extname(file)
		const fileBaseName = basename(file, extension)

		if (!fileBaseName.endsWith(suffix)) {
			continue
		}

		const name = fileBaseName.slice(0, -suffix.length)

		if (!name) {
			continue
		}

		const normalizedFile = normalizePath(file)
		const existingFile = icons.get(name)

		if (existingFile) {
			throw new Error(
				`[@dubium/icons] Дублирующееся имя локальной иконки "${name}".\n` +
					"Найдено в:\n" +
					`  - ${existingFile}\n` +
					`  - ${normalizedFile}\n` +
					"Переименуйте один из файлов или используйте другой суффикс/структуру источника.",
			)
		}

		icons.set(name, normalizedFile)
	}

	return { icons }
}
