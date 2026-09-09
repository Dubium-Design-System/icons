import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandGoogleAnalyticsOutlineIcon = ({
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
		<path d="M10 10.105A1.105 1.105 0 0 1 11.105 9h1.79A1.105 1.105 0 0 1 14 10.105v9.79A1.105 1.105 0 0 1 12.895 21h-1.79A1.105 1.105 0 0 1 10 19.895zm7-6A1.105 1.105 0 0 1 18.105 3h1.79A1.105 1.105 0 0 1 21 4.105v15.79A1.105 1.105 0 0 1 19.895 21h-1.79A1.105 1.105 0 0 1 17 19.895zM3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
	</svg>
)

export default BrandGoogleAnalyticsOutlineIcon
