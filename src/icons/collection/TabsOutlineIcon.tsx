import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TabsOutlineIcon = ({
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
		<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		<path d="M6.36 5a2 2 0 0 1 1.962 1.608l.356 1.784A2 2 0 0 0 10.64 10H19a2 2 0 0 1 2 2" />
		<path d="M12.36 5a2 2 0 0 1 1.962 1.608l.356 1.784A2 2 0 0 0 16.64 10" />
	</svg>
)

export default TabsOutlineIcon
