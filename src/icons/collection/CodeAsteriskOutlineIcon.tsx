import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CodeAsteriskOutlineIcon = ({
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
		<path d="M6 19a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2m6 6.875 3-1.687m-3 1.687v3.375m0-3.375-3-1.687m3 1.687 3 1.688M12 8.5v3.375m0 0-3 1.688M18 19a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2" />
	</svg>
)

export default CodeAsteriskOutlineIcon
