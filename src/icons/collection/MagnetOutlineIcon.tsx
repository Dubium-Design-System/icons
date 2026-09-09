import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MagnetOutlineIcon = ({
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
		<path d="M4 13V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a2 2 0 0 0 6 0V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a8 8 0 0 1-16 0m0-5h5m6 0h4" />
	</svg>
)

export default MagnetOutlineIcon
