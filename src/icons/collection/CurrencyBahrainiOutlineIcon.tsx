import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyBahrainiOutlineIcon = ({
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
		<path d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2-2v-3m-4 9.01V19m7-3.99V15m3 0h2a2 2 0 0 0 1.649-3.131L17.996 8" />
	</svg>
)

export default CurrencyBahrainiOutlineIcon
