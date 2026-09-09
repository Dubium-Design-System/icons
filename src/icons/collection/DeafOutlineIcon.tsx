import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeafOutlineIcon = ({
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
		<path d="M6 10a7 7 0 1 1 13 3.6 10 10 0 0 1-2 2 8 8 0 0 0-2 3A4.5 4.5 0 0 1 8.2 20" />
		<path d="M10 10a3 3 0 1 1 5 2.2M5 13l4 4m0-4-4 4" />
	</svg>
)

export default DeafOutlineIcon
