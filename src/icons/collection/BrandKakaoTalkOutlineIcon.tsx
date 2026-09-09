import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandKakaoTalkOutlineIcon = ({
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
		<path d="M10 8v7m4-5-2 2.5 2 2.5" />
		<path d="M12 4c4.97 0 9 3.358 9 7.5S16.97 19 12 19c-.67 0-1.323-.061-1.95-.177L7 21l.592-2.962C4.851 16.754 3 14.308 3 11.5 3 7.358 7.03 4 12 4" />
	</svg>
)

export default BrandKakaoTalkOutlineIcon
