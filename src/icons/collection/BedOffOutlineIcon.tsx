import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BedOffOutlineIcon = ({
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
		<path d="M7 7a2 2 0 1 0 2 2m13 8v-3h-4m-4 0H2m0-6v9m10-5v2h2m4 0h4v-2a3 3 0 0 0-3-3h-6M3 3l18 18" />
	</svg>
)

export default BedOffOutlineIcon
