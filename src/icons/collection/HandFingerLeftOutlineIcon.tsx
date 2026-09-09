import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HandFingerLeftOutlineIcon = ({
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
		<path d="M12 8H3.5a1.5 1.5 0 0 0 0 3H11m-.5 0h-2a1.5 1.5 0 1 0 0 3H11m-1.5 0a1.5 1.5 0 0 0 0 3H11" />
		<path d="M10.5 17a1.5 1.5 0 0 0 0 3H15a6 6 0 0 0 6-6v-2 .208a6 6 0 0 0-2.7-5.012L18 7q-.718-.468-5.728-3.286a1.5 1.5 0 0 0-2.022.536 1.87 1.87 0 0 0 .28 2.28L12 8" />
	</svg>
)

export default HandFingerLeftOutlineIcon
