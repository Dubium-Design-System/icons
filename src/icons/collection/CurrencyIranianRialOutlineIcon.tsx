import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyIranianRialOutlineIcon = ({
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
		<path d="M9 4v9a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-1m9-6v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-1m5 3v1.096a5 5 0 0 1-3.787 4.85L17 20m-6-2h.01M14 18h.01" />
	</svg>
)

export default CurrencyIranianRialOutlineIcon
