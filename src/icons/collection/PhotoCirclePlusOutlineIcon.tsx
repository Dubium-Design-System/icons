import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PhotoCirclePlusOutlineIcon = ({
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
		<path d="M15 8h.01m5.954 4.806A9 9 0 0 0 12 3a9 9 0 0 0-9 9 9 9 0 0 0 9.397 8.991" />
		<path d="m4 15 4-4c.928-.893 2.072-.893 3 0l4 4" />
		<path d="m14 14 1-1c.928-.893 2.072-.893 3 0m-2 6.33h6m-3-3v6" />
	</svg>
)

export default PhotoCirclePlusOutlineIcon
