import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HelicopterOutlineIcon = ({
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
		<path d="m3 10 1 2h6m2-3a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2c0-3.31-3.13-5-7-5zm1 0V6M5 6h15" />
		<path d="M15 9.1V13h5.5M15 19v-3m4 3h-8" />
	</svg>
)

export default HelicopterOutlineIcon
