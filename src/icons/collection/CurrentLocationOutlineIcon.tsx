import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrentLocationOutlineIcon = ({
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
		<path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
		<path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0m8-10v2m0 16v2m8-10h2M2 12h2" />
	</svg>
)

export default CurrentLocationOutlineIcon
