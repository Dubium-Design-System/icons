import { useContext } from "react"
import { IconContext } from "./IconProvider.context.js"
import type { IIconContextValue } from "./IconProvider.types.js"
import type { TEmptyIconRegistry, TIconRegistry } from "../icon/index.js"

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
 * - Используется внутри `Icon` для доступа к кастомным иконкам,
 *   которые имеют приоритет над `virtual:@dubium/icons-registry`
 *   и runtime registry
 */
export const useIconContext = <TCustomIcons extends TIconRegistry = TEmptyIconRegistry>() => {
	return useContext(IconContext) as IIconContextValue<TCustomIcons>
}
