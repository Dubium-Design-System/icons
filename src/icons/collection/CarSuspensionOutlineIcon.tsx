import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CarSuspensionOutlineIcon = ({
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
		<path d="M12 22a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-6V4m1-2h-2v2h2zm-4 9 6-1m-6 4 6-1M9 8l6-1" />
	</svg>
)

export default CarSuspensionOutlineIcon
