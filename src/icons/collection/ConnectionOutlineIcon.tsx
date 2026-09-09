import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ConnectionOutlineIcon = ({
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
		<path d="M15 6.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m-11 11a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m4.5-2 7-7" />
	</svg>
)

export default ConnectionOutlineIcon
