import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapPinMinusOutlineIcon = ({
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
		<path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
		<path d="M12.758 21.337a2 2 0 0 1-2.171-.437l-4.244-4.243a8 8 0 1 1 12.585-1.652M16 19h6" />
	</svg>
)

export default MapPinMinusOutlineIcon
