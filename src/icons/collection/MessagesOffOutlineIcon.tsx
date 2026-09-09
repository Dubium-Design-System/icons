import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MessagesOffOutlineIcon = ({
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
		<path d="m3 3 18 18M11 11a1 1 0 0 1-1-1m0-3.968V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10l-3-3h-3m-1 4v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2" />
	</svg>
)

export default MessagesOffOutlineIcon
