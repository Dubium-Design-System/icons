/**
 * Результат сканирования одного файла.
 *
 * @internal
 */
export interface ScanResult {
	/** Количество найденных динамических имён иконок. */
	dynamicNames: number

	/** Множество статических имён иконок, найденных в файле. */
	icons: Set<string>
}
