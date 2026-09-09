import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CylinderPlusOutlineIcon = ({
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
		<path d="M5 6a7 3 0 1 0 14 0A7 3 0 1 0 5 6" />
		<path d="M5 6v12c0 1.657 3.134 3 7 3q.26 0 .515-.008M19 12V6m-3 13h6m-3-3v6" />
	</svg>
)

export default CylinderPlusOutlineIcon
