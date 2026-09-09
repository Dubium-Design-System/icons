import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShieldPlusOutlineIcon = ({
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
		<path d="M12.462 20.87q-.23.07-.462.13A12 12 0 0 1 3.5 6 12 12 0 0 0 12 3a12 12 0 0 0 8.5 3 12 12 0 0 1 .11 6.37M16 19h6m-3-3v6" />
	</svg>
)

export default ShieldPlusOutlineIcon
