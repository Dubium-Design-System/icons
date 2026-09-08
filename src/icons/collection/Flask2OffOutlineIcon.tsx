import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Flask2OffOutlineIcon = ({
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
		<path d="M6.1 15H15m2.742 2.741A6 6 0 0 1 15.318 21H8.683A6 6 0 0 1 10 10.34v-.326M10 6V3h4v7m.613.598a6 6 0 0 1 2.801 2.817M9 3h6M3 3l18 18" />
	</svg>
)

export default Flask2OffOutlineIcon
