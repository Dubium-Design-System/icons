import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChefHatOffOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M8.72 4.712a4 4 0 0 1 7.19 1.439A4 4 0 0 1 18 13.874V14m0 4v3H6v-7.126a4 4 0 0 1 .081-7.796m.08 10.931L17 17M3 3l18 18" />
	</svg>
)

export default ChefHatOffOutlineIcon
