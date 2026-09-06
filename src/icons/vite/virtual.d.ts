/**
 * Декларация типа для виртуального модуля `virtual:@dubium/icons-registry`.
 *
 * @remarks
 * Модуль создаётся плагином {@link dubiumIcons} в памяти при сборке или запуске
 * dev-сервера и содержит только иконки, реально используемые в приложении.
 */
declare module "virtual:@dubium/icons-registry" {
	export const iconRegistry: import("./icon/Icon.types.js").TIconRegistry
}
