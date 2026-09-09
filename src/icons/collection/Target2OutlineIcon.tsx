import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Target2OutlineIcon = ({
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
		<path d="m17 21-1.74-6M7 21l1.74-6M12 4V3m2 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
		<path d="M18 10a6 6 0 1 0-12 0 6 6 0 0 0 12 0" />
	</svg>
)

export default Target2OutlineIcon
