import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CodeDotsOutlineIcon = ({
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
		<path d="M15 12h.01M12 12h.01M9 12h.01M6 19a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2m12 14a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2" />
	</svg>
)

export default CodeDotsOutlineIcon
