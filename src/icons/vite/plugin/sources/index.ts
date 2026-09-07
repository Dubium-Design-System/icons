/**
 * Публичный API модуля источников иконок.
 *
 * @remarks
 * Содержит работу с файловой системой (обход директорий, сбор локальных
 * каталогов) и валидацию настроек источников.
 */

export { buildLocalCatalog } from "./sources.catalog.js"
export { DEFAULT_EXTENSIONS, getSourceFiles, isPathInsideDirectory, normalizePath } from "./sources.files.js"
export { validateSources } from "./sources.validate.js"
export type { ILocalSourceCatalog } from "./sources.types.js"
