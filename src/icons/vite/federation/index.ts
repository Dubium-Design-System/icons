/**
 * Дополнительный Vite-плагин для CSS в OriginJS Module Federation.
 * Подключается явно в конфигурации Remote после federation().
 */
export { fixFederationCss } from "./federation.js"
export type { FixFederationCssOptions } from "./federation.types.js"
