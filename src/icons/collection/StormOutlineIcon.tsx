import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const StormOutlineIcon = ({
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
		<path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
		<path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
		<path d="M5.369 14.236C3.53 10.307 3.808 6.62 4.665 3M18.63 9.76c1.837 3.928 1.561 7.615.703 11.236" />
	</svg>
)

export default StormOutlineIcon
