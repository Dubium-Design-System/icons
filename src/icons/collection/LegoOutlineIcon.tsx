import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LegoOutlineIcon = ({
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
		<path d="M9.5 11h.01m4.99 0h.01M9.5 15a3.5 3.5 0 0 0 5 0" />
		<path d="M7 5h1V3h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3v1H7v-1a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3" />
	</svg>
)

export default LegoOutlineIcon
