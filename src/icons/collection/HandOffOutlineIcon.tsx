import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HandOffOutlineIcon = ({
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
		<path d="m3 3 18 18M8 13.5V8m.44-3.562A1.5 1.5 0 0 1 11 5.5V7m0 4.008V12m0-6.5v-2a1.5 1.5 0 1 1 3 0V10m0-4.5a1.5 1.5 0 0 1 3 0V12m0-4.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2c-2.114-.292-3.956-1.397-5-3l-2.7-5.25a1.7 1.7 0 0 1 2.75-2l.9 1.75" />
	</svg>
)

export default HandOffOutlineIcon
