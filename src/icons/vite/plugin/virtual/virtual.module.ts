import type { TDubiumIconSource } from "../plugin.types.js"
import type { ILocalSourceCatalog } from "../sources/sources.types.js"

/**
 * Настройки автоматической публикации compile-time loaders в runtime registry.
 */
interface IRuntimeRegistryModuleOptions {
	/** Имена, которые нужно опубликовать в runtime registry. */
	iconNames: readonly string[]

	/** Уникальный owner приложения/MF. */
	owner: string
}

/**
 * Генерирует исходный код виртуального модуля с реестром иконок.
 *
 * @remarks
 * Package-импорты предварительно проверяются через Vite/Rollup resolver.
 * Благодаря этому для несуществующей статически обнаруженной иконки
 * плагин выбрасывает понятную ошибку до генерации записи в реестре.
 *
 * Если передан `runtimeRegistry`, модуль дополнительно публикует указанные
 * loaders в общий runtime registry через `registerIcons`.
 *
 * @param iconNames - Имена иконок для включения в compile-time registry
 * @param localCatalogs - Локальные каталоги для разрешения путей импортов
 * @param packageSource - Package-источник, используемый как fallback
 * @param resolveImport - Резолвер пути импорта
 * @param runtimeRegistry - Настройки автоматической runtime-публикации
 * @returns Исходный код виртуального модуля
 * @throws Если найденное имя иконки не разрешилось ни через local sources,
 * ни через package source
 */
export const createVirtualModuleSource = async (
	iconNames: readonly string[],
	localCatalogs: readonly ILocalSourceCatalog[],
	packageSource: Extract<TDubiumIconSource, { type: "package" }> | undefined,
	resolveImport: (importPath: string) => Promise<{ id: string } | null | undefined>,
	runtimeRegistry?: IRuntimeRegistryModuleOptions,
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

	const runtimeIconNames = runtimeRegistry
		? [...new Set(runtimeRegistry.iconNames)].filter((name) => iconNames.includes(name))
		: []

	const runtimeImport =
		runtimeRegistry && runtimeIconNames.length > 0
			? `import { registerIcons as __registerDubiumIcons } from "@dubium/icons/vite/runtime"\n\n`
			: ""

	const runtimeEntries = runtimeIconNames.map(
		(name) => `\t${JSON.stringify(name)}: iconRegistry[${JSON.stringify(name)}],`,
	)

	const runtimeRegistration =
		runtimeRegistry && runtimeEntries.length > 0
			? `

const runtimeIconRegistry = {
${runtimeEntries.join("\n")}
}

__registerDubiumIcons(${JSON.stringify(runtimeRegistry.owner)}, runtimeIconRegistry)
`
			: ""

	return `${runtimeImport}/**
 * СГЕНЕРИРОВАНО В ПАМЯТИ плагином @dubium/icons/vite.
 * Содержит только ссылки на иконки, обнаруженные scanner-ом или добавленные через include.
 */
export const iconRegistry = {
${entries.join("\n")}
}
${runtimeRegistration}`
}
