import type { SVGProps } from "react"

/**
 * Свойства сгенерированных SVG-компонентов иконок.
 *
 * @remarks
 * Расширяет стандартные атрибуты `SVGProps`, добавляя пропы для замены
 * первичного и вторичного цвета иконки.
 */
export interface IIconComponentProps extends SVGProps<SVGSVGElement> {
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
