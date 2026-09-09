import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SnowmanOutlineIcon = ({
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
		<path d="M12 3a4 4 0 0 1 2.906 6.75 6 6 0 1 1-5.81 0A4 4 0 0 1 12 3m5.5 8.5L20 10M6.5 11.5 4 10m8 3h.01M12 16h.01" />
	</svg>
)

export default SnowmanOutlineIcon
