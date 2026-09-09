import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BatteryVertical3OutlineIcon = ({
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
		<path d="M7 18V7a2 2 0 0 1 2-2h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h.5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2m3-1h4m-4-3h4m-4-3h4" />
	</svg>
)

export default BatteryVertical3OutlineIcon
