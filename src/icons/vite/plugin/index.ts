/**
 * Публичный API Vite-плагина {@link dubiumIcons}.
 *
 * @remarks
 * Плагин сканирует исходники приложения, строит virtual registry
 * `virtual:@dubium/icons-registry` и при необходимости автоматически
 * публикует scanner-detected loaders в runtime registry для MF.
 */

export { dubiumIcons } from "./plugin.js"
export { dubiumIcons as default } from "./plugin.js"

export type { DubiumIconsPluginOptions, TDubiumIconIncludeName, TDubiumIconSource } from "./plugin.types.js"
