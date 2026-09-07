import type { TDubiumIconSource } from "../plugin.types.js"
import type { ILocalSourceCatalog } from "../sources/sources.types.js"

/**
 * Генерирует исходный код виртуального модуля с реестром иконок.
 *
 * @remarks
 * Package-импорты предварительно проверяются через Vite/Rollup resolver.
 * Благодаря этому для несуществующей статически обнаруженной иконки
 * плагин выбрасывает понятную ошибку до генерации записи в реестре.
 *
 * @param iconNames - Имена иконок для включения в реестр
 * @param localCatalogs - Локальные каталоги для разрешения путей импорта
 * @param packageSource - Package-источник, используемый как fallback
 * @param resolveImport - Резолвер пути импорта
 * @returns Исходный код виртуального модуля
 * @throws Если найденное имя иконки не разрешилось ни через local sources,
 * ни через package source
 */
export const createVirtualModuleSource = async (
	iconNames: readonly string[],
	localCatalogs: readonly ILocalSourceCatalog[],
	packageSource: Extract<TDubiumIconSource, { type: "package" }> | undefined,
	resolveImport: (importPath: string) => Promise<{ id: string } | null | undefined>,
): Promise<string> => {
	const entries: string[] = []

	for (const name of iconNames) {
		let importPath: string | undefined
		let isPackageImport = false

		for (const catalog of localCatalogs) {
			const localPath = catalog.icons.get(name)

			if (localPath) {
				importPath = localPath
				break
			}
		}

		if (!importPath && packageSource) {
			importPath = packageSource.importPattern.replaceAll("{name}", name)
			isPackageImport = true
		}

		if (!importPath) {
			throw new Error(
				`[@dubium/icons] Иконка "${name}" не найдена ни в local sources, ни в package source.\n` +
					"Проверьте настройки options.sources или добавьте компонент иконки в один из источников.",
			)
		}

		if (isPackageImport) {
			const resolvedId = await resolveImport(importPath)

			if (!resolvedId) {
				throw new Error(
					`[@dubium/icons] Иконка "${name}" не найдена: импорт "${importPath}" не резолвится.\n` +
						"Проверьте наличие иконки в npm-пакете или настройки options.sources.",
				)
			}
		}

		entries.push(`\t${JSON.stringify(name)}: () => import(${JSON.stringify(importPath)}),`)
	}

	return `/**
 * СГЕНЕРИРОВАНО В ПАМЯТИ плагином @dubium/icons/vite.
 * Содержит только ссылки на иконки, обнаруженные в этом приложении/MF.
 */
export const iconRegistry = {
${entries.join("\n")}
}
`
}
