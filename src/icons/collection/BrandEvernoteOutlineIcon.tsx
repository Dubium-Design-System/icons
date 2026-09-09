import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandEvernoteOutlineIcon = ({
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
		<path d="M4 8h5V3" />
		<path d="M17.9 19c.6-2.5 1.1-5.471 1.1-9 0-4.5-2-5-3-5-1.906 0-3-.5-3.5-1-.354-.354-.5-1-1.5-1H9L4 8c0 6 2.5 8 5 8 1 0 1.5-.5 2-1.5s1.414-.326 2.5 0c1.044.313 2.01.255 2.5.5 1 .5 2 1.5 2 3 0 .5 0 3-3 3s-3-3-1-3m1-8h1" />
	</svg>
)

export default BrandEvernoteOutlineIcon
