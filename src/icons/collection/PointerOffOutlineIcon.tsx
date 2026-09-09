import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PointerOffOutlineIcon = ({
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
		<path d="m15.662 11.628 2.229-1.496a1.2 1.2 0 0 0-.309-2.228L9.569 5.601M4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093 4.907 4.907a1.067 1.067 0 0 0 1.509 0l.524-.524M3 3l18 18" />
	</svg>
)

export default PointerOffOutlineIcon
