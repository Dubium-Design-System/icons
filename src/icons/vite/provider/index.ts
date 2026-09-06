/**
 * Публичный API модуля провайдера иконок для SPA (клиентский рендеринг).
 *
 * Экспортирует `IconProvider`, хук `useIconContext` и связанные типы.
 */

export { IconProvider } from "./IconProvider.js"
export { useIconContext } from "./IconProvider.context.js"

export type { IIconContextValue, IIconProviderProps } from "./IconProvider.types.js"
