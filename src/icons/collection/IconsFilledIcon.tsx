import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const IconsFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M4.25 2.603A4.5 4.5 0 1 1 2 6.5l.006-.229A4.5 4.5 0 0 1 4.25 2.603m1.382 10.901a1 1 0 0 1 1.736 0l4 7A1 1 0 0 1 10.5 22h-8a1 1 0 0 1-.868-1.496zm7.661-11.211a1 1 0 0 1 1.414 0l7 7a1 1 0 1 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414" />
		<path d="M20.293 2.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414-1.414zM21 13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z" />
	</svg>
)

export default IconsFilledIcon
