import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BookmarkAiOutlineIcon = ({
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
		<path d="M10.02 18.32 6 21V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4.5M14 21v-4a2 2 0 1 1 4 0v4m-4-2h4m3-4v6" />
	</svg>
)

export default BookmarkAiOutlineIcon
