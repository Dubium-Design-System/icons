/**
 * Публичный API runtime-реестра иконок.
 *
 * @remarks
 * Позволяет регистрировать иконки приложений и микрофронтендов (MF) в общем
 * реестре на `globalThis`, читать загрузчики по имени и подписываться на
 * изменения реестра. Подробности — в {@link IconRuntime.registry.ts}.
 */

export {
	getRuntimeIconLoader,
	getRuntimeIconsVersion,
	registerIcons,
	subscribeRuntimeIcons,
} from "./IconRuntime.registry.js"
