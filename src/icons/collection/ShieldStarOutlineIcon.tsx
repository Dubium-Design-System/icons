import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShieldStarOutlineIcon = ({
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
		<path d="M11.143 20.743A12 12 0 0 1 3.5 6 12 12 0 0 0 12 3a12 12 0 0 0 8.5 3c.504 1.716.614 3.505.343 5.237" />
		<path d="m17.8 20.817-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411z" />
	</svg>
)

export default ShieldStarOutlineIcon
