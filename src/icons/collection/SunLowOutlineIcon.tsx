import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SunLowOutlineIcon = ({
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
		<path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m-4 0h.01M12 4v.01M20 12h.01M12 20v.01M6.31 6.31 6.3 6.3m11.41.01-.01-.01m0 11.4.01.01M6.3 17.7l.01.01" />
	</svg>
)

export default SunLowOutlineIcon
