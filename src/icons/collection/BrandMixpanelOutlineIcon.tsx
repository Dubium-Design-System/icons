import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandMixpanelOutlineIcon = ({
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
		<path d="M2 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m17 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m-8 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
	</svg>
)

export default BrandMixpanelOutlineIcon
