import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandBlenderOutlineIcon = ({
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
		<path d="M9 14a6 5 0 1 0 12 0 6 5 0 1 0-12 0" />
		<path d="M14 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 16l9-6.5M6 9h9m-2-4 5.65 5" />
	</svg>
)

export default BrandBlenderOutlineIcon
