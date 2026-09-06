import type { ReactNode } from "react"

import type { TEmptyIconRegistry, TIconRegistry } from "../icon/index.js"

/**
 * Значение, хранящееся в React-контексте `IconContext`.
 *
 * @template TCustomIcons - Тип реестра кастомных иконок (расширяет `TIconRegistry`)
 */
export interface IIconContextValue<TCustomIcons extends TIconRegistry = TEmptyIconRegistry> {
	/**
	 * Реестр кастомных иконок (ленивые загрузчики)
	 */
	icons: TCustomIcons
}

/**
 * Свойства компонента `IconProvider`.
 *
 * @template TCustomIcons - Тип реестра кастомных иконок (расширяет `TIconRegistry`)
 */
export interface IIconProviderProps<TCustomIcons extends TIconRegistry = TEmptyIconRegistry> {
	/**
	 * Дочерние React-элементы, которые получат доступ к контексту
	 */
	children: ReactNode

	/**
	 * Реестр кастомных иконок (опционально, по умолчанию пустой объект)
	 */
	icons?: TCustomIcons
}
