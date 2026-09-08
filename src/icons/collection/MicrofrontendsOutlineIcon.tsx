import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MicrofrontendsOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7.5 7.5 12 12l4.5-4.5M6 16v-4m12 4v-4"/><path d="M16 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
)

export default MicrofrontendsOutlineIcon
