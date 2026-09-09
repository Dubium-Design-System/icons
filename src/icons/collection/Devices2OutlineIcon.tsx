import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Devices2OutlineIcon = ({
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
		<path d="M10 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6m3 0a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zM7 19h3m7-11v.01" />
		<path d="M16 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-7-1v4" />
	</svg>
)

export default Devices2OutlineIcon
