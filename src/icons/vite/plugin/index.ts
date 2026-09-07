/**
 * Публичный API Vite-плагина {@link dubiumIcons}.
 *
 * @remarks
 * Плагин сканирует исходники приложения, строит виртуальный модуль
 * `virtual:@dubium/icons-registry` с реестром только реально используемых
 * иконок и разрешает его через `resolveId`/`load`.
 */

export { dubiumIcons } from "./plugin.js"
export { dubiumIcons as default } from "./plugin.js"

export type { DubiumIconsPluginOptions, TDubiumIconSource } from "./plugin.types.js"
