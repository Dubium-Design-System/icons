import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandAuth0OutlineIcon = ({
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
		<path d="M12 14.5 6.5 18l2-6L4 8h6l2-5 2 5h6l-4.5 4 2 6z" />
		<path d="M20.507 8.872 18.497 3H5.503L3.494 8.872c-1.242 3.593-.135 7.094 3.249 9.407L12 22l5.257-3.721c3.385-2.313 4.49-5.814 3.25-9.407" />
	</svg>
)

export default BrandAuth0OutlineIcon
