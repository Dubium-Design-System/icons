import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlayCardOffOutlineIcon = ({
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
		<path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5m11 13h.01" />
		<path d="M13.716 13.712 12 16l-3-4 1.29-1.72M3 3l18 18" />
	</svg>
)

export default PlayCardOffOutlineIcon
