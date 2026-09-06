import { createContext, useContext } from "react"

import type { TEmptyIconRegistry, TIconRegistry } from "../icon/index.js"
import type { IIconContextValue } from "./IconProvider.types.js"

/**
 * React-контекст для хранения реестра иконок.
 *
 * Используется компонентами `Icon` / `AppIcon` для получения кастомных иконок,
 * переданных через `IconProvider`.
 *
 * @remarks
 * - Значение по умолчанию содержит пустой реестр (`icons: {}`)
 * - Без `IconProvider` будут доступны только встроенные (`defaultIcons`) иконки
 */
export const IconContext = createContext<IIconContextValue<TIconRegistry>>({
	icons: {},
})

/**
 * Хук для доступа к `IconContext` с поддержкой типизации кастомных иконок.
 *
 * @typeParam TCustomIcons - Тип реестра кастомных иконок
 *
 * @returns Значение контекста с типизированным полем `icons`
 *
 * @example
 * ```ts
 * const { icons } = useIconContext<typeof appIcons>();
 * ```
 *
 * @remarks
 * - Выполняет приведение типа (`type assertion`), так как TypeScript
 *   не может автоматически вывести тип из `IconProvider`
 * - Используется внутри `Icon` для объединения:
 *   `{ ...defaultIcons, ...icons }`
 */
export const useIconContext = <TCustomIcons extends TIconRegistry = TEmptyIconRegistry>() => {
	return useContext(IconContext) as IIconContextValue<TCustomIcons>
}
