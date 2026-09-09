import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AdjustmentsStarOutlineIcon = ({
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
		<path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-6v4m0 4v8m6-16v9.5M16 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m-.2 15.817-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411zM18 9v1" />
	</svg>
)

export default AdjustmentsStarOutlineIcon
