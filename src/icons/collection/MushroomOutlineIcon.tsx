import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MushroomOutlineIcon = ({
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
		<path d="M20 11.1C20 6.626 16.418 3 12 3s-8 3.626-8 8.1a.9.9 0 0 0 .9.9h14.2a.9.9 0 0 0 .9-.9M10 12v7a2 2 0 1 0 4 0v-7" />
	</svg>
)

export default MushroomOutlineIcon
