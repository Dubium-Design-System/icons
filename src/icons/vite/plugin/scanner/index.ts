/**
 * Публичный API модуля сканера исходников.
 *
 * @remarks
 * Экспортирует {@link scanSource} — функцию, которая собирает статические
 * имена иконок из JSX-тегов, импортов `Icon` и строковых свойств.
 */

export { scanSource } from "./scanner.source.js"
export type { ScanResult } from "./scanner.types.js"
