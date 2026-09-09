import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const JpgOutlineIcon = ({
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
		<path d="M21 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1m-10 4V8h2a2 2 0 1 1 0 4h-2M3 8h4v6a2 2 0 0 1-2 2H3.5a.5.5 0 0 1-.5-.5V15" />
	</svg>
)

export default JpgOutlineIcon
