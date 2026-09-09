import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileHorizontalOutlineIcon = ({
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
		<path d="M16 5v4a1 1 0 0 0 1 1h4" />
		<path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7l-5-5H5a2 2 0 0 0-2 2" />
	</svg>
)

export default FileHorizontalOutlineIcon
