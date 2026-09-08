import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SoupOffOutlineIcon = ({
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
		<path d="M3 19h16m-4-8h6c0 1.691-.525 3.26-1.42 4.552m-2.034 2.032A7.96 7.96 0 0 1 13 19h-2a8 8 0 0 1-8-8h8m1-6v3m3-3v3M3 3l18 18" />
	</svg>
)

export default SoupOffOutlineIcon
