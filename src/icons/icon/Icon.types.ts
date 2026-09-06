import type { ComponentType, CSSProperties } from "react"
import type { IIconComponentProps } from "../collection/types.js"

/**
 * React-компонент, представляющий иконку.
 */
export type TIconComponent = ComponentType<IIconComponentProps>

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
