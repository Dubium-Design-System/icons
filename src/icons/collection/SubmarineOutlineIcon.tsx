import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SubmarineOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M3 11v6h2l1-1.5L9 17h10a3 3 0 0 0 0-6H9l-3 1.5L5 11zm14 0-1-3h-5l-1 3m3-3V6a1 1 0 0 1 1-1h1" />
	</svg>
)

export default SubmarineOutlineIcon
