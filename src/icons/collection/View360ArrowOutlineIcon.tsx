import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const View360ArrowOutlineIcon = ({
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
		<path d="M17 15.328c2.414-.718 4-1.94 4-3.328 0-2.21-4.03-4-9-4s-9 1.79-9 4 4.03 4 9 4" />
		<path d="m9 13 3 3-3 3" />
	</svg>
)

export default View360ArrowOutlineIcon
