import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapPin2OutlineIcon = ({
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
		<path d="M12 18.5 9 17l-6 3V7l6-3 6 3 6-3v7M9 4v13m6-10v5m6.121 8.121a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01" />
	</svg>
)

export default MapPin2OutlineIcon
