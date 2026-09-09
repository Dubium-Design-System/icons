import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BookUploadOutlineIcon = ({
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
		<path d="M14 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12v5" />
		<path d="M11 16H6a2 2 0 0 0-2 2m11-2 3-3 3 3m-3-3v9" />
	</svg>
)

export default BookUploadOutlineIcon
