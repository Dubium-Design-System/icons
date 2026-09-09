import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GlassCocktailOutlineIcon = ({
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
		<path d="M8 21h8m-4-6v6M5 5a7 2 0 1 0 14 0A7 2 0 1 0 5 5" />
		<path d="M5 5v.388c0 .432.126.853.362 1.206l5 7.509c.633.951 1.88 1.183 2.785.517.191-.141.358-.316.491-.517l5-7.509c.236-.353.362-.774.362-1.206V5" />
	</svg>
)

export default GlassCocktailOutlineIcon
