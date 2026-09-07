/**
 * Идентификатор виртуального модуля, через который загружается реестр иконок.
 *
 * @remarks
 * Используется в приложении как источник `iconRegistry` с ленивыми
 * загрузчиками всех иконок, обнаруженных плагином.
 */
export const VIRTUAL_MODULE_ID = "virtual:@dubium/icons-registry"

/**
 * Разрешённый идентификатор виртуального модуля для Vite.
 *
 * @remarks
 * Префикс `\0` защищает модуль от внешнего доступа в dev-сервере.
 */
export const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`
