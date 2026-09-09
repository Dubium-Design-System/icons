import type { SVGProps } from "react"

/**
 * Свойства сгенерированных SVG-компонентов иконок.
 *
 * @remarks
 * Добавляет пропы для замены первичного и вторичного цвета иконки.
 * strokeWidth доступен отдельно в IStrokeIconComponentProps только для SVG,
 * в которых присутствует атрибут stroke-width.
 */
export interface IIconComponentProps extends Omit<SVGProps<SVGSVGElement>, "strokeWidth"> {
	/**
	 * Основной цвет иконки.
	 *
	 * Заменяет первый найденный цвет в исходном SVG.
	 */
	color?: string

	/**
	 * Вторичный цвет для двухцветных иконок.
	 *
	 * Заменяет второй найденный цвет в исходном SVG.
	 */
	secondaryColor?: string
}

/** Свойства иконок, у которых исходный SVG содержит stroke-width. */
export interface IStrokeIconComponentProps extends IIconComponentProps {
	/**
	 * Толщина обводки. Явное значение имеет приоритет над CSS-переменной.
	 *
	 * @default "var(--icon-stroke-width, 1.5px)"
	 */
	strokeWidth?: number | string
}
