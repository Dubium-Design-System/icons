import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BuildingPavilionOutlineIcon = ({
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
		<path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7M6 21v-9m12 9v-9M6 12h12a3 3 0 0 0 3-3 9 8 0 0 1-9-6 9 8 0 0 1-9 6 3 3 0 0 0 3 3" />
	</svg>
)

export default BuildingPavilionOutlineIcon
