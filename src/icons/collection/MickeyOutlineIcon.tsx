import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MickeyOutlineIcon = ({
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
		<path d="M5.5 3a3.5 3.5 0 0 1 3.25 4.8 7 7 0 0 0-2.424 2.1A3.5 3.5 0 1 1 5.5 3m13 0a3.5 3.5 0 1 1-.826 6.902 7 7 0 0 0-2.424-2.103A3.5 3.5 0 0 1 18.5 3" />
		<path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
	</svg>
)

export default MickeyOutlineIcon
