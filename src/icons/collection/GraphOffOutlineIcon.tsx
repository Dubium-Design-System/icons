import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GraphOffOutlineIcon = ({
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
		<path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.547.22-1.043.576-1.405" />
		<path d="m7 14 3-3 2 2 .5-.5m2-2 .5-.5 2 2M3 3l18 18" />
	</svg>
)

export default GraphOffOutlineIcon
