import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SkewXOutlineIcon = ({
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
		<path d="M4 5.205v13.59a1 1 0 0 0 1.184.983l14-2.625A1 1 0 0 0 20 16.17V7.83a1 1 0 0 0-.816-.983l-14-2.625A1 1 0 0 0 4 5.205" />
	</svg>
)

export default SkewXOutlineIcon
