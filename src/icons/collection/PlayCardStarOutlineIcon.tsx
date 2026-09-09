import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlayCardStarOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M19 5v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M8 6h.01M16 18h.01" />
		<path d="m11.75 14.112-1.63.853a.294.294 0 0 1-.425-.307l.31-1.808-1.317-1.28a.292.292 0 0 1 .163-.499l1.82-.264.815-1.644a.294.294 0 0 1 .527 0l.814 1.644 1.82.264a.292.292 0 0 1 .164.499l-1.318 1.28.31 1.807a.292.292 0 0 1-.425.308z" />
	</svg>
)

export default PlayCardStarOutlineIcon
