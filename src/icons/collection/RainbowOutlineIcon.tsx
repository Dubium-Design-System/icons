import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RainbowOutlineIcon = ({
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
		<path d="M22 17c0-5.523-4.477-10-10-10S2 11.477 2 17" />
		<path d="M18 17a6 6 0 1 0-12 0" />
		<path d="M14 17a2 2 0 1 0-4 0" />
	</svg>
)

export default RainbowOutlineIcon
