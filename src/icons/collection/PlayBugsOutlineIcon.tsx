import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlayBugsOutlineIcon = ({
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
		<path d="M3.5 18a2.5 3 0 1 0 5 0 2.5 3 0 1 0-5 0M2 17.5h1.5m5 0H10m-.5-3L8 16m-5.5-1.5L4 16m-1.5 5.5L4 20m4 0 1.5 1.5m6-5.5 6.5-5-11-8" />
		<path d="m13 12.5 2-1.5L4 3v8" />
	</svg>
)

export default PlayBugsOutlineIcon
