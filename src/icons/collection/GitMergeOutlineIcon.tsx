import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GitMergeOutlineIcon = ({
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
		<path d="M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 8v8" />
		<path d="M7 8a4 4 0 0 0 4 4h4" />
	</svg>
)

export default GitMergeOutlineIcon
