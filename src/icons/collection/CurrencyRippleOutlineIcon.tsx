import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyRippleOutlineIcon = ({
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
		<path d="M4 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m10-5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m0 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
		<path d="M10 12h3l2-2.5m0 5L13 12" />
	</svg>
)

export default CurrencyRippleOutlineIcon
