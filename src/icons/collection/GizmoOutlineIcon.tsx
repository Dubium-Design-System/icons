import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GizmoOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m20 19-8-5.5L4 19m8-15v9.5M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M3 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0m16 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/></svg>
)

export default GizmoOutlineIcon
