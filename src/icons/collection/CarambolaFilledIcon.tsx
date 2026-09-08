import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CarambolaFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17.108 22.085c-1.266-.068-2.924-.859-5.071-2.355l-.04-.027-.037.027c-2.147 1.497-3.804 2.288-5.072 2.356l-.178.005c-2.747 0-3.097-2.64-1.718-7.244l.054-.178-.1-.075C-1.11 9.956-.1 6.746 7.5 6.528l.202-.005.115-.326c1.184-3.33 2.426-5.085 4.027-5.192L12 1c1.674 0 2.957 1.76 4.182 5.197l.114.326.204.005c7.6.218 8.61 3.428 2.553 8.065l-.102.075.055.178c1.35 4.512 1.04 7.137-1.556 7.24l-.163.003z"/></svg>
)

export default CarambolaFilledIcon
