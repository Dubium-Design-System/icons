import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartColumnOutlineIcon = ({
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
		<path d="M4 20h3m10 0h3m-9.5 0h3M4 16h3m10 0h3m-9.5 0h3M4 12h3m10 0h3m-9.5 0h3M4 8h3m10 0h3M4 4h3" />
	</svg>
)

export default ChartColumnOutlineIcon
