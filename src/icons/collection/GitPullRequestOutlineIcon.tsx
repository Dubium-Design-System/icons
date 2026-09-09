import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GitPullRequestOutlineIcon = ({
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
		<path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 8v8" />
		<path d="M11 6h5a2 2 0 0 1 2 2v8" />
		<path d="m14 9-3-3 3-3" />
	</svg>
)

export default GitPullRequestOutlineIcon
