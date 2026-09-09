import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClockCancelOutlineIcon = ({
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
		<path d="M20.997 12.25a9 9 0 1 0-8.718 8.745M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4" />
		<path d="M12 7v5l2 2" />
	</svg>
)

export default ClockCancelOutlineIcon
