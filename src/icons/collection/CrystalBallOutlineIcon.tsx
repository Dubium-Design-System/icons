import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CrystalBallOutlineIcon = ({
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
		<path d="M6.73 17.018a8 8 0 1 1 10.54 0" />
		<path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0-4H7a2 2 0 0 0-2 2m6-12a3 3 0 0 0-3 3" />
	</svg>
)

export default CrystalBallOutlineIcon
