import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandCppOutlineIcon = ({
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
		<path d="M18 12h4m-2-2v4m-9-2h4m-2-2v4M9 9a3 3 0 0 0-3-3h-.5A3.5 3.5 0 0 0 2 9.5v5A3.5 3.5 0 0 0 5.5 18H6a3 3 0 0 0 3-3" />
	</svg>
)

export default BrandCppOutlineIcon
