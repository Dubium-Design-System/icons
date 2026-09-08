import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GitPullRequestConflictOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M16 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M11 6h5a2 2 0 0 1 2 2v8M4 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-7v5M4 4l4 4m0-4L4 8"/></svg>
)

export default GitPullRequestConflictOutlineIcon
