/**
 * Локальный каталог иконок, собранный из файловой системы.
 *
 * @internal
 */
export interface ILocalSourceCatalog {
	/** Соответствие имени иконки пути к её компоненту. */
	icons: Map<string, string>
}
