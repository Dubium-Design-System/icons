import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PackagesOutlineIcon = ({
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
		<path d="m7 16.5-5-3 5-3 5 3V19l-5 3z" />
		<path d="M2 13.5V19l5 3m0-5.455 5-3.03m5 2.985-5-3 5-3 5 3V19l-5 3zM12 19l5 3m0-5.5 5-3m-10 0V8L7 5l5-3 5 3v5.5M7 5.03v5.455M12 8l5-3" />
	</svg>
)

export default PackagesOutlineIcon
