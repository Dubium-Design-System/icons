import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowsSplit2OutlineIcon = ({
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
		<path d="M21 17h-5.397a5 5 0 0 1-4.096-2.133l-.514-.734A5 5 0 0 0 6.897 12H3m18-5h-5.395a5 5 0 0 0-4.098 2.135l-.51.73A5 5 0 0 1 6.9 12H3" />
		<path d="m18 10 3-3-3-3m0 16 3-3-3-3" />
	</svg>
)

export default ArrowsSplit2OutlineIcon
