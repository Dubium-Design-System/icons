import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CalculatorOffOutlineIcon = ({
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
		<path d="M19.823 19.824A2 2 0 0 1 18 21H6a2 2 0 0 1-2-2V5c0-.295.064-.575.178-.827M7 3h11a2 2 0 0 1 2 2v11" />
		<path d="M10 10H9a1 1 0 0 1-1-1V8m3-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1m-6 4v.01m4-.01v.01M8 17v.01m4-.01v.01m4-.01v.01M3 3l18 18" />
	</svg>
)

export default CalculatorOffOutlineIcon
