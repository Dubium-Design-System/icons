import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PingPongOutlineIcon = ({
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
		<path d="M12.718 20.713a7.64 7.64 0 0 1-7.48-12.755l.72-.72a7.64 7.64 0 0 1 9.105-1.283L17.45 3.61a2.08 2.08 0 0 1 3.057 2.815l-.116.126-2.346 2.387a7.64 7.64 0 0 1-1.052 8.864" />
		<path d="M11 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M9.3 5.3l9.4 9.4" />
	</svg>
)

export default PingPongOutlineIcon
