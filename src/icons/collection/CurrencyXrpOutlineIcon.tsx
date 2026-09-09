import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyXrpOutlineIcon = ({
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
		<path d="m5 5 3.585 3.585a4.83 4.83 0 0 0 6.83 0L19 5M5 19l3.585-3.585a4.83 4.83 0 0 1 6.83 0L19 18.999" />
	</svg>
)

export default CurrencyXrpOutlineIcon
