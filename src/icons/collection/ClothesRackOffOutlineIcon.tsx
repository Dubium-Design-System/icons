import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClothesRackOffOutlineIcon = ({
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
		<path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2v1m0 4v9m-3 0h6M7.757 9.243a6 6 0 0 0 3.129 1.653m3.578-.424a6 6 0 0 0 1.779-1.229M3 3l18 18" />
	</svg>
)

export default ClothesRackOffOutlineIcon
