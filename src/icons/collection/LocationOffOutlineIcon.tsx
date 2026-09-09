import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LocationOffOutlineIcon = ({
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
		<path d="M10.72 6.712 21 3l-3.724 10.313m-1.056 2.925L14.5 21a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1l4.775-1.724M3 3l18 18" />
	</svg>
)

export default LocationOffOutlineIcon
