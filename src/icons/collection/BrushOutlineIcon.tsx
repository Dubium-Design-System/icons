import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrushOutlineIcon = ({
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
		<path d="M3 21v-4a4 4 0 1 1 4 4z" />
		<path d="M21 3A16 16 0 0 0 8.2 13.2M21 3a16 16 0 0 1-10.2 12.8" />
		<path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
	</svg>
)

export default BrushOutlineIcon
