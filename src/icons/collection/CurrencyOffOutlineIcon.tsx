import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyOffOutlineIcon = ({
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
		<path d="M18.531 14.524a7 7 0 0 0-9.06-9.053M7.049 7.053a7 7 0 0 0 9.903 9.896M4 4l3 3m13-3-3 3M4 20l3-3m13 3-3-3M3 3l18 18" />
	</svg>
)

export default CurrencyOffOutlineIcon
