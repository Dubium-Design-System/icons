import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowMergeAltLeftOutlineIcon = ({
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
		<path d="m8 7 4-4 4 4m2 14v.01m0-3v.01m-1-3v.01m-3-2v.01" />
		<path d="M12 3v5.394A6.74 6.74 0 0 1 9 14a6.74 6.74 0 0 0-3 5.606V21" />
	</svg>
)

export default ArrowMergeAltLeftOutlineIcon
