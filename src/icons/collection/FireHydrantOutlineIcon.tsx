import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FireHydrantOutlineIcon = ({
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
		<path d="M5 21h14m-2 0v-5h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1V8A5 5 0 0 0 7 8v4H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v5" />
		<path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 8h12" />
	</svg>
)

export default FireHydrantOutlineIcon
