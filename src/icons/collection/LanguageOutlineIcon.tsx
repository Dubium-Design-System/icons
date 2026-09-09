import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LanguageOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M9 6.371C9 10.789 6.761 13 4 13m0-6.629h7" />
		<path d="M5 9c0 2.144 2.252 3.908 6 4m1 7 4-9 4 9m-.9-2h-6.2M6.694 3l.793.582" />
	</svg>
)

export default LanguageOutlineIcon
