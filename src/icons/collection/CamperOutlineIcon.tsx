import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CamperOutlineIcon = ({
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
		<path d="M5 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
		<path d="M5 18H4a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h12a4 4 0 0 1 4 4H3m6 10h6" />
		<path d="M19 18h1a1 1 0 0 0 1-1v-4l-3-5m3 5h-7m0-5v10" />
	</svg>
)

export default CamperOutlineIcon
