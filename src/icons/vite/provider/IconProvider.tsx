import { useMemo } from "react"

import type { TEmptyIconRegistry, TIconRegistry } from "../icon/index.js"
import type { IIconProviderProps } from "./IconProvider.types.js"

import { IconContext } from "./IconProvider.context.js"

/**
 * Провайдер контекста UI-библиотеки (`IconProvider`).
 *
 * Обеспечивает передачу реестра кастомных иконок вниз по дереву компонентов,
 * чтобы они могли быть использованы в `Icon` / `AppIcon`.
 *
 * @typeParam TCustomIcons - Тип реестра кастомных иконок (обычно `typeof appIcons`)
 *
 * @param props - Свойства провайдера
 * @param props.children - Дочерние React-элементы
 * @param props.icons - Реестр кастомных иконок (lazy loaders)
 *
 * @returns Провайдер контекста с доступом к иконкам
 *
 * @example
 * ```tsx
 * const appIcons = {
 *   User: () => import("./UserIcon"),
 * } as const;
 *
 * <IconProvider icons={appIcons}>
 *   <App />
 * </IconProvider>
 * ```
 *
 * @remarks
 * - Не обязателен для использования встроенных (`defaultIcons`) иконок
 * - Обязателен для работы кастомных иконок
 * - Использует `useMemo` для предотвращения лишних перерисовок
 * - Если `icons` не передан, используется пустой реестр
 */
export const IconProvider = <TCustomIcons extends TIconRegistry = TEmptyIconRegistry>({
	children,
	icons,
}: IIconProviderProps<TCustomIcons>) => {
	const value = useMemo(
		() => ({
			icons: icons ?? ({} as TCustomIcons),
		}),
		[icons],
	)

	return <IconContext.Provider value={value}>{children}</IconContext.Provider>
}
