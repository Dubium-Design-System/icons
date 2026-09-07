import type { TDubiumIconSource } from "../plugin.types.js"

/**
 * Проверяет настройки источников иконок на допустимость.
 *
 * @remarks
 * Гарантирует, что задан максимум один `package` source и его шаблон
 * импорта содержит плейсхолдер `{name}`.
 *
 * @param sources - Список настроенных источников иконок
 * @throws Если указано больше одного package source
 * @throws Если `importPattern` package source не содержит `{name}`
 */
export const validateSources = (sources: readonly TDubiumIconSource[]): void => {
	const packageSources = sources.filter(
		(source): source is Extract<TDubiumIconSource, { type: "package" }> => source.type === "package",
	)

	if (packageSources.length > 1) {
		throw new Error(
			"[@dubium/icons] Допускается только один package source.\n" +
				`Получено: ${packageSources.length} package sources.\n` +
				"Используйте несколько local sources и один package source как fallback.",
		)
	}

	const packageSource = packageSources[0]

	if (packageSource && !packageSource.importPattern.includes("{name}")) {
		throw new Error(
			"[@dubium/icons] Некорректный importPattern у package source.\n" +
				`Получено: ${JSON.stringify(packageSource.importPattern)}\n` +
				'Шаблон должен содержать "{name}".\n' +
				'Пример: "@dubium/icons/icons/{name}".',
		)
	}
}
