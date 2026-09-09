import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TextGrammarOutlineIcon = ({
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
		<path d="M14 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0M4 12V7a3 3 0 1 1 6 0v5M4 9h6m10-3v6M4 16h12M4 20h6m4 0 2 2 5-5" />
	</svg>
)

export default TextGrammarOutlineIcon
