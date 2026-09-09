import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyRiyalOutlineIcon = ({
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
		<path d="M15 9v2a2 2 0 1 1-4 0v-1 1a2 2 0 1 1-4 0v-1 4a2 2 0 1 1-4 0v-2m15 .01V12m4-2v1a5 5 0 0 1-5 5" />
	</svg>
)

export default CurrencyRiyalOutlineIcon
