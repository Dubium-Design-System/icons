import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandBloggerOutlineIcon = ({
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
		<path d="M8 21h8a5 5 0 0 0 5-5v-3a3 3 0 0 0-3-3h-1V8a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5" />
		<path d="M7 8.5A1.5 1.5 0 0 1 8.5 7h3A1.5 1.5 0 0 1 13 8.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7 8.5m0 7A1.5 1.5 0 0 1 8.5 14h7a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 15.5" />
	</svg>
)

export default BrandBloggerOutlineIcon
