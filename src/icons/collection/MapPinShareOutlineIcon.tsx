import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapPinShareOutlineIcon = ({
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
		<path d="M12.02 21.485a2 2 0 0 1-1.433-.585l-4.244-4.243a8 8 0 1 1 13.403-3.651M16 22l5-5m0 4.5V17h-4.5" />
	</svg>
)

export default MapPinShareOutlineIcon
