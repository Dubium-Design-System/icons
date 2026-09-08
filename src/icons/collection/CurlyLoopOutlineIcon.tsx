import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurlyLoopOutlineIcon = ({
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
		<path d="M21 8c-4 0-7 2-7 5a3 3 0 0 0 6 0c0-3-2.5-5-8-5s-8 2-8 5a3 3 0 0 0 6 0c0-3-3-5-7-5" />
	</svg>
)

export default CurlyLoopOutlineIcon
