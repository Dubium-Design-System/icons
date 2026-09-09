import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandSteamOutlineIcon = ({
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
		<path d="M16.5 5a4.5 4.5 0 1 1-.653 8.953L11.5 16.962V17a3 3 0 0 1-2.824 3H8.5a3 3 0 0 1-2.94-2.402L3 16.5V13l3.51 1.755a2.99 2.99 0 0 1 2.834-.635l2.727-3.818A4.5 4.5 0 0 1 16.5 5" />
		<path fill={color} d="M15.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default BrandSteamOutlineIcon
