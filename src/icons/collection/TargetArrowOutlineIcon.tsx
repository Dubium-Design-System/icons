import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TargetArrowOutlineIcon = ({
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
		<path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
		<path d="M12 7a5 5 0 1 0 5 5" />
		<path d="M13 3.055A9 9 0 1 0 20.941 11" />
		<path d="M15 6v3h3l3-3h-3V3zm0 3-3 3" />
	</svg>
)

export default TargetArrowOutlineIcon
