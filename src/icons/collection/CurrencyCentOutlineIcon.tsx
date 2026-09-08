import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyCentOutlineIcon = ({
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
		<path d="M16.007 7.54A5.97 5.97 0 0 0 11.999 6a6 6 0 0 0-5.992 6c0 3.314 2.682 6 5.992 6a5.97 5.97 0 0 0 4-1.536M12 20v-2m0-12V4" />
	</svg>
)

export default CurrencyCentOutlineIcon
