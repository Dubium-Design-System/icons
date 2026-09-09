import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SolarPanel2OutlineIcon = ({
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
		<path d="M8 2a4 4 0 1 0 8 0M4 3h1m14 0h1m-8 6v1m5.2-2.8.707.707M6.8 7.2l-.7.7M4.28 21h15.44a1 1 0 0 0 .97-1.243l-1.5-6a1 1 0 0 0-.97-.757H5.78a1 1 0 0 0-.97.757l-1.5 6A1 1 0 0 0 4.28 21M4 17h16m-10-4-1 8m5-8 1 8" />
	</svg>
)

export default SolarPanel2OutlineIcon
