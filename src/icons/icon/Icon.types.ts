import type { ComponentType, CSSProperties } from "react"
import type { IStrokeIconComponentProps } from "../collection/types.js"

/**
 * React-компонент, представляющий иконку.
 */
export type TIconComponent = ComponentType<IStrokeIconComponentProps>

/**
 * Свойства универсального компонента Icon.
 */
export interface IconProps {
	/**
	 * Доступное название (aria-label).
	 *
	 * Без названия иконка считается декоративной.
	 */
	ariaLabel?: string

	/**
	 * Основной цвет иконки.
	 */
	color?: string

	/**
	 * Вторичный цвет для двухцветных иконок.
	 */
	secondaryColor?: string

	/**
	 * Толщина обводки для поддерживающих её иконок.
	 * Без prop используется --icon-stroke-width с fallback 1.5px.
	 */
	strokeWidth?: IStrokeIconComponentProps["strokeWidth"]

	/**
	 * Поворот контейнера в градусах.
	 *
	 * @default 0
	 */
	deg?: number

	/**
	 * Высота контейнера.
	 *
	 * Переопределяет `size` для высоты.
	 */
	height?: number | string

	/**
	 * Компонент иконки, отображаемый внутри контейнера.
	 */
	name: TIconComponent

	/**
	 * Размер контейнера.
	 *
	 * Используется и для ширины, и для высоты, если они не заданы отдельно.
	 *
	 * @default 24
	 */
	size?: number | string

	/**
	 * Стили контейнера.
	 */
	style?: CSSProperties

	/**
	 * Ширина контейнера.
	 *
	 * Переопределяет `size` для ширины.
	 */
	width?: number | string
}
