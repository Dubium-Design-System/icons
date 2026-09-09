import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TagsChevronDownOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M5 3v13.446c0 .345.155.665.411.848l6.125 4.375a.78.78 0 0 0 .928 0l6.125-4.375a1.04 1.04 0 0 0 .411-.848V3l-7 5z" />
		<path d="m5 10 6.536 4.669a.78.78 0 0 0 .928 0L19 10" />
	</svg>
)

export default TagsChevronDownOutlineIcon
