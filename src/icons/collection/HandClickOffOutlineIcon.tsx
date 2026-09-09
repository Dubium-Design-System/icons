import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HandClickOffOutlineIcon = ({
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
		<path d="M8 13V8m.06-3.923A1.5 1.5 0 0 1 11 4.5V7m0 4v1m1.063-3.935A1.5 1.5 0 0 1 14 9.5v.5m.06.082A1.5 1.5 0 0 1 17 10.5V12" />
		<path d="M17 11.5a1.5 1.5 0 0 1 3 0V16m-.88 3.129A6 6 0 0 1 14 22h-2 .208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.87 1.87 0 0 1 2.28.28L8 13M3 3l18 18M4 7H3m11-4 1-1m0 4h1" />
	</svg>
)

export default HandClickOffOutlineIcon
