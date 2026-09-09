import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChristmasBallOutlineIcon = ({
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
		<path d="M4 13a8 8 0 1 0 16 0 8 8 0 1 0-16 0" />
		<path d="m11 5 1-2 1 2m-8.488 5.161Q8.256 8.504 12 11q3.941 2.628 7.882.653M4.315 15.252Q8.157 13.438 12 16q3.439 2.292 6.878 1.081" />
	</svg>
)

export default ChristmasBallOutlineIcon
