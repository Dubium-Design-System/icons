import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CoinTakaOutlineIcon = ({
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
		<path d="m8 8 .553-.276A1 1 0 0 1 10 8.618V15a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5-2.5V14h-1m-6-3h7" />
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
	</svg>
)

export default CoinTakaOutlineIcon
