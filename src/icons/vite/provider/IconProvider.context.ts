import { createContext} from "react"

import type {  TIconRegistry } from "../icon/index.js"
import type { IIconContextValue } from "./IconProvider.types.js"

/**
 * React-контекст для хранения реестра иконок.
 *
 * Используется компонентами `Icon` / `AppIcon` для получения кастомных иконок,
 * переданных через `IconProvider`.
 *
 * @remarks
 * - Значение по умолчанию содержит пустой реестр (`icons: {}`)
 * - Без `IconProvider` доступны иконки из compile-time virtual registry
 *   (`virtual:@dubium/icons-registry`) и иконки, зарегистрированные
 *   в runtime registry
 */
export const IconContext = createContext<IIconContextValue<TIconRegistry>>({
	icons: {},
})
