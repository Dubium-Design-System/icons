import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LocationDollarOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M13.08 20.162 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-2.55 7.063M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1" />
	</svg>
)

export default LocationDollarOutlineIcon
