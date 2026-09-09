import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Armchair2OutlineIcon = ({
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
		<path d="M5 10V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" />
		<path d="M16 15v-2a3 3 0 1 1 3 3v3H5v-3a3 3 0 1 1 3-3v2m0-3h8m-9 7v2m10-2v2" />
	</svg>
)

export default Armchair2OutlineIcon
