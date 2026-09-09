import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HandLoveYouOutlineIcon = ({
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
		<path d="M11 11.5v-1a1.5 1.5 0 0 1 3 0V12" />
		<path d="M17 12V5.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.87 1.87 0 0 1 2.28.28L8 13" />
		<path d="M14 10.5a1.5 1.5 0 0 1 3 0V12m-9 1V4.5a1.5 1.5 0 0 1 3 0V12" />
	</svg>
)

export default HandLoveYouOutlineIcon
