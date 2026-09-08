import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RepeatOnceOutlineIcon = ({
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
		<path d="M4 12V9a3 3 0 0 1 3-3h13m-3-3 3 3-3 3m3 3v3a3 3 0 0 1-3 3H4m3 3-3-3 3-3m4-4 1-1v4" />
	</svg>
)

export default RepeatOnceOutlineIcon
