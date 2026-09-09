import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CodePlusOutlineIcon = ({
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
		<path d="M9 12h6m-3-3v6m-6 4a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2m12 14a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2" />
	</svg>
)

export default CodePlusOutlineIcon
