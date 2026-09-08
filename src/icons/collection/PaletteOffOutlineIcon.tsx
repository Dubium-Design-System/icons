import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PaletteOffOutlineIcon = ({
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
		<path d="M15 15h-1a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21 9 9 0 0 1 5.628 5.644M8 4c1.236-.623 2.569-1 4-1 4.97 0 9 3.582 9 8 0 1.06-.474 2.078-1.318 2.828a4.5 4.5 0 0 1-1.127.73" />
		<path d="M7.5 10.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" />
	</svg>
)

export default PaletteOffOutlineIcon
