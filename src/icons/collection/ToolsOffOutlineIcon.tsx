import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ToolsOffOutlineIcon = ({
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
		<path d="m16 12 4-4a2.828 2.828 0 1 0-4-4l-4 4m-2 2-7 7v4h4l7-7m.5-8.5 4 4" />
		<path d="M12 8 7 3M5 5 3 7l5 5M7 8 5.5 9.5M16 12l5 5m-2 2-2 2-5-5m4 1-1.5 1.5M3 3l18 18" />
	</svg>
)

export default ToolsOffOutlineIcon
