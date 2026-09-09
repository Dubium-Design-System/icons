import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TagsChevronRightOutlineIcon = ({
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
		<path d="M3 19h13.485a1 1 0 0 0 .814-.419l4.286-6a1 1 0 0 0 0-1.162l-4.286-6A1 1 0 0 0 16.485 5H3l5 7z" />
		<path d="m10 19 4.585-6.419a1 1 0 0 0 0-1.162L10 5" />
	</svg>
)

export default TagsChevronRightOutlineIcon
