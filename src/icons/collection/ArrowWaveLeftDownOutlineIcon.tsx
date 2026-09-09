import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowWaveLeftDownOutlineIcon = ({
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
		<path d="M7 14H3v-4" />
		<path d="M21 12c-.887 1.284-2.48 2.033-4 2-1.52.033-3.113-.716-4-2s-2.48-2.033-4-2c-1.52-.033-3 1-4 2l-2 2" />
	</svg>
)

export default ArrowWaveLeftDownOutlineIcon
