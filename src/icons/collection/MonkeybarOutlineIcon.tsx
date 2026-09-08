import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MonkeybarOutlineIcon = ({
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
		<path d="M3 21V6l5-3 5 3v15m-5 0v-7m-5 0h10" />
		<path d="M6 10a2 2 0 1 1 4 0m3 3c6 0 3 8 8 8" />
	</svg>
)

export default MonkeybarOutlineIcon
