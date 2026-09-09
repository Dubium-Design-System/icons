import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MatchstickOutlineIcon = ({
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
		<path d="m3 21 14-9m-1 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
		<path d="m17 3 3.62 7.29a4.01 4.01 0 0 1-.764 4.51 4 4 0 0 1-6.493-4.464z" />
	</svg>
)

export default MatchstickOutlineIcon
