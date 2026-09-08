import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MacroOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M6 15a6 6 0 0 0 11.47 2.467"/><path d="M15.53 15.53A6 6 0 0 0 12 21"/><path d="M12 21a6 6 0 0 0-6-6m6 6V11m-1.134-.13a5.01 5.01 0 0 1-3.734-3.723M7 3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-2.604 4.389M3 3l18 18"/></svg>
)

export default MacroOffOutlineIcon
