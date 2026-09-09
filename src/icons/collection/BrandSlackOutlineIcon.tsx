import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandSlackOutlineIcon = ({
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
		<path d="M12 12V6a2 2 0 0 1 4 0v6m0-2a2 2 0 1 1 2 2h-6m0 0h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1-2 2v-6m0 0v6a2 2 0 0 1-4 0v-6m0 2a2 2 0 1 1-2-2h6m0 0H6a2 2 0 0 1 0-4h6m-2 0a2 2 0 1 1 2-2v6" />
	</svg>
)

export default BrandSlackOutlineIcon
