import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LockBoltOutlineIcon = ({
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
		<path d="M13.5 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 1.74 1.012" />
		<path d="M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-3-5V7a4 4 0 1 1 8 0v4m3 5-2 3h4l-2 3" />
	</svg>
)

export default LockBoltOutlineIcon
