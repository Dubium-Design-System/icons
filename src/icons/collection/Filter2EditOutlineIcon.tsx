import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Filter2EditOutlineIcon = ({
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
		<path d="M4 6h16M6 12h11m-8 6h2m7.42-2.39a2.1 2.1 0 0 1 1.485-.615 2.1 2.1 0 0 1 1.485.615 2.1 2.1 0 0 1 0 2.97L18 22h-3v-3z" />
	</svg>
)

export default Filter2EditOutlineIcon
