import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Infinity2OutlineIcon = ({
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
		<path d="M13.94 9.39a10 10 0 0 1 .232-.218 4 4 0 1 1 0 5.656A10 10 0 0 1 12 12a10 10 0 0 0-2.172-2.828 4 4 0 1 0 0 5.656 10 10 0 0 0 .234-.219" />
	</svg>
)

export default Infinity2OutlineIcon
