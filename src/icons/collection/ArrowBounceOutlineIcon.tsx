import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowBounceOutlineIcon = ({
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
		<path d="M10 18h4M3 8a9 9 0 0 1 9 9v1l1.428-4.285a12 12 0 0 1 6.018-6.938L20 6.5" />
		<path d="M15 6h5v5" />
	</svg>
)

export default ArrowBounceOutlineIcon
