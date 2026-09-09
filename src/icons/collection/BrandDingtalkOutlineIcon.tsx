import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandDingtalkOutlineIcon = ({
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
		<path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
		<path d="m8 7.5 7.02 2.632a1 1 0 0 1 .567 1.33L14.5 14H16l-5 4 1-4c-3.1.03-3.114-3.139-4-6.5" />
	</svg>
)

export default BrandDingtalkOutlineIcon
