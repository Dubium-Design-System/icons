import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SpacesOutlineIcon = ({
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
		<path d="M6.045 9.777a6 6 0 1 0 5.951.023" />
		<path d="M11.997 20.196a6 6 0 1 0-2.948-5.97" />
		<path d="M17.95 9.785Q18 9.399 18 9a6 6 0 1 0-3.056 5.23" />
	</svg>
)

export default SpacesOutlineIcon
