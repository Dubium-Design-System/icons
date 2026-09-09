import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyBitcoinOutlineIcon = ({
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
		<path d="M6 6h8a3 3 0 0 1 0 6 3 3 0 0 1 0 6H6M8 6v12m0-6h6M9 3v3m4-3v3M9 18v3m4-3v3" />
	</svg>
)

export default CurrencyBitcoinOutlineIcon
