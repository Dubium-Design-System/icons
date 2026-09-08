import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const JumpRopeOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M6 14V8a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6"/><path d="M16 5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 2 2 0 0 1-2-2zM4 16a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 2 2 0 0 1-2-2z"/></svg>
)

export default JumpRopeOutlineIcon
