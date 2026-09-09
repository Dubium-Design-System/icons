import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyKroneCzechOutlineIcon = ({
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
		<path d="M5 6v12m0-6c3.5 0 6-3 6-6m-6 6c3.5 0 6 3 6 6m8-12-2 2-2-2m4 6h-2a3 3 0 0 0 0 6h2" />
	</svg>
)

export default CurrencyKroneCzechOutlineIcon
