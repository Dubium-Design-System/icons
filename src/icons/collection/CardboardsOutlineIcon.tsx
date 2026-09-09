import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CardboardsOutlineIcon = ({
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
		<path d="M3 8v8.5A2.5 2.5 0 0 0 5.5 19h1.06a3 3 0 0 0 2.34-1.13l1.54-1.92a2 2 0 0 1 3.12 0l1.54 1.92A3 3 0 0 0 17.44 19h1.06a2.5 2.5 0 0 0 2.5-2.5V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2" />
		<path d="M7 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default CardboardsOutlineIcon
