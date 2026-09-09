import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BellDownOutlineIcon = ({
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
		<path d="M12.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6 2 2 0 1 1 4 0 7 7 0 0 1 4 6v1m-9 5v1a3 3 0 0 0 3.518 2.955M19 16v6m3-3-3 3-3-3" />
	</svg>
)

export default BellDownOutlineIcon
