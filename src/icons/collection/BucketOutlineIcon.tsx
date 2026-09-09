import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BucketOutlineIcon = ({
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
		<path d="M4 7a8 4 0 1 0 16 0A8 4 0 1 0 4 7" />
		<path d="M4 7c0 .664.088 1.324.263 1.965L7 19c.5 1.5 2.239 2 5 2s4.5-.5 5-2q.5-1.5 2.737-10.035A7.5 7.5 0 0 0 20 7" />
	</svg>
)

export default BucketOutlineIcon
