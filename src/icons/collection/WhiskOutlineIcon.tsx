import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WhiskOutlineIcon = ({
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
		<path d="M21.015 3.035 4.5 19.5m-1.327-1.881a4.63 4.63 0 0 0 3.284 3.26 4.67 4.67 0 0 0 4.487-1.194c1.85-1.836 4.07-10.65 4.07-10.65s-8.88 2.296-10.639 4.132a4.59 4.59 0 0 0-1.202 4.452" />
	</svg>
)

export default WhiskOutlineIcon
