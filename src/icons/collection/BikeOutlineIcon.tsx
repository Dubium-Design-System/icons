import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BikeOutlineIcon = ({
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
		<path d="M2 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m14 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-4 1v-4l-3-3 5-4 2 3h3m-5.993-6a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
	</svg>
)

export default BikeOutlineIcon
