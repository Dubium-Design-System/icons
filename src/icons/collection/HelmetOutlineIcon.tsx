import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HelmetOutlineIcon = ({
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
		<path d="M12 4a9 9 0 0 1 5.656 16H6.344A9 9 0 0 1 12 4" />
		<path d="M20 9h-8.8a1 1 0 0 0-.968 1.246q.76 3 3.268 4.254 3 1.5 7 1.5" />
	</svg>
)

export default HelmetOutlineIcon
