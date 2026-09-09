import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapShieldOutlineIcon = ({
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
		<path d="M15 11a3 3 0 1 0-3 3" />
		<path d="M12.249 21.47a2 2 0 0 1-1.662-.57l-4.244-4.243a8 8 0 1 1 13.655-5.828" />
		<path d="M22 16c0 4-2.5 6-3.5 6S15 20 15 16c1 0 2.5-.5 3.5-1.5 1 1 2.5 1.5 3.5 1.5" />
	</svg>
)

export default MapShieldOutlineIcon
