import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileIsrOutlineIcon = ({
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
		<path d="M15 3v4a1 1 0 0 0 1 1h4" />
		<path d="M15 3v4a1 1 0 0 0 1 1h4" />
		<path d="M6 8V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7" />
		<path d="m3 15 3-3 3 3" />
	</svg>
)

export default FileIsrOutlineIcon
