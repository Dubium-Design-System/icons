import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartDonut3OutlineIcon = ({
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
		<path d="M12 3v5m4 4h5M8.929 14.582 5.5 17.5M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
	</svg>
)

export default ChartDonut3OutlineIcon
