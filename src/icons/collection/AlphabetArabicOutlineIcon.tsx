import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AlphabetArabicOutlineIcon = ({
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
		<path d="M10 6v4m3 4h8q-2.518-3-4-3m-4-5v9.958c0 .963 0 1.444-.293 1.743S11.943 18 11 18h-1M7 6v9.958c0 .963 0 1.444-.293 1.743S5.943 18 5 18H4" />
	</svg>
)

export default AlphabetArabicOutlineIcon
