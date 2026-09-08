import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const UmbrellaOffOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M12 12H4c0-2.209.895-4.208 2.342-5.656m2.382-1.645A8 8 0 0 1 20 12h-4m-4 0v6a2 2 0 1 0 4 0M3 3l18 18" />
	</svg>
)

export default UmbrellaOffOutlineIcon
