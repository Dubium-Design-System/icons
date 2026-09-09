import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyTakaOutlineIcon = ({
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
		<path d="M15.5 15.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
		<path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5M8 11h6" />
	</svg>
)

export default CurrencyTakaOutlineIcon
