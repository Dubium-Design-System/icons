import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlugConnectedXOutlineIcon = ({
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
		<path d="m20 16-4 4m-9-8 5 5-1.5 1.5a3.536 3.536 0 1 1-5-5zm10 0-5-5 1.5-1.5a3.536 3.536 0 1 1 5 5zM3 21l2.5-2.5m13-13L21 3m-11 8-2 2m5 1-2 2m5 0 4 4" />
	</svg>
)

export default PlugConnectedXOutlineIcon
