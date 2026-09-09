import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CakeRollOutlineIcon = ({
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
		<path d="M12 15c-4.97 0-9-2.462-9-5.5S7.03 4 12 4s9 2.462 9 5.5-4.03 5.5-9 5.5" />
		<path d="M12 6.97c3 0 4 1.036 4 1.979 0 2.805-8 2.969-8-.99C8 5.849 9.5 4 12 4" />
		<path d="M21 9.333v5.334C21 17.612 16.97 20 12 20s-9-2.388-9-5.333V9.333" />
	</svg>
)

export default CakeRollOutlineIcon
