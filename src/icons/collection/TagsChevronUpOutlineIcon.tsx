import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TagsChevronUpOutlineIcon = ({
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
		<path d="M5 21V7.554c0-.345.155-.665.411-.848l6.125-4.375a.78.78 0 0 1 .928 0l6.125 4.375c.256.183.411.503.411.848V21l-7-5z" />
		<path d="m5 14 6.536-4.669a.78.78 0 0 1 .928 0L19 14" />
	</svg>
)

export default TagsChevronUpOutlineIcon
