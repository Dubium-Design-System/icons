import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandSkypeOutlineIcon = ({
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
		<path d="M12 3a9 9 0 0 1 8.603 11.65 4.5 4.5 0 0 1-5.953 5.953A9 9 0 0 1 3.397 9.35 4.5 4.5 0 0 1 9.35 3.396 9 9 0 0 1 12 3" />
		<path d="M8 14.5c.5 2 2.358 2.5 4 2.5 2.905 0 4-1.187 4-2.5 0-1.503-1.927-2.5-4-2.5s-4-1-4-2.5C8 8.187 9.095 7 12 7c1.642 0 3.5.5 4 2.5" />
	</svg>
)

export default BrandSkypeOutlineIcon
