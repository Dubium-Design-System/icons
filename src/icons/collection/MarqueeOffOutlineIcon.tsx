import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MarqueeOffOutlineIcon = ({
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
		<path d="M4 6c0-.556.227-1.059.593-1.421M9 4h1.5m3 0H15m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3V15m-.598 4.426A2 2 0 0 1 18 20m-3 0h-1.5m-3 0H9m-3 0a2 2 0 0 1-2-2m0-3v-1.5m0-3V9M3 3l18 18" />
	</svg>
)

export default MarqueeOffOutlineIcon
