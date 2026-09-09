import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SolarElectricityOutlineIcon = ({
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
		<path d="M4 6.28v11.44a1 1 0 0 0 1.243.97l6-1.5a1 1 0 0 0 .757-.97V7.78a1 1 0 0 0-.757-.97l-6-1.5A1 1 0 0 0 4 6.28M8 6v12m4-6H4m16-5-3 5h4l-3 5" />
	</svg>
)

export default SolarElectricityOutlineIcon
