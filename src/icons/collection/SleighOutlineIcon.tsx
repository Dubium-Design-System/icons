import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SleighOutlineIcon = ({
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
		<path d="M3 19h15a4 4 0 0 0 4-4m-6 0H7a4 4 0 0 1-4-4V5l1.243 1.243A6 6 0 0 0 8.485 8H12v2a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 1 3 0V12a3 3 0 0 1-3 3m-1 0v4m-8-4v4" />
	</svg>
)

export default SleighOutlineIcon
