import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ABOffOutlineIcon = ({
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
		<path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0V16m0-4H3m9 0v6m0-12v2m4 0h3a2 2 0 1 1 0 4h-3m3 0a2 2 0 0 1 .83 3.82M16 12V8M3 3l18 18" />
	</svg>
)

export default ABOffOutlineIcon
