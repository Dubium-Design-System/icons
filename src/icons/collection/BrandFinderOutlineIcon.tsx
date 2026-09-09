import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandFinderOutlineIcon = ({
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
		<path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 3v1m10-1v1" />
		<path d="M12.5 4c-.654 1.486-1.26 3.443-1.5 9h2.5c-.19 2.867.094 5.024.5 7" />
		<path d="M7 15.5c3.667 2 6.333 2 10 0" />
	</svg>
)

export default BrandFinderOutlineIcon
