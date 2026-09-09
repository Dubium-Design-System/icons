/** Настройки дополнительного CSS-плагина для OriginJS Module Federation. */
export interface FixFederationCssOptions {
	/**
	 * Имя remote entry или точный путь относительно build.outDir.
	 *
	 * Имя без директории ищется в любой директории bundle.
	 * Путь с директорией сопоставляется целиком. Разделители Windows поддерживаются.
	 *
	 * @default "remoteEntry.js"
	 * @example "iconsRemoteEntry.js"
	 * @example "assets/remoteEntry.js"
	 */
	remoteEntry?: string
}
