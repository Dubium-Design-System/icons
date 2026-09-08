import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ApiOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 13h5m3 3v-4m0-4h3a2 2 0 0 1 2 2v1c0 .554-.225 1.055-.589 1.417M13 13h-1m8-5v8M9 16v-5.5a2.5 2.5 0 0 0-5 0V16M3 3l18 18"/></svg>
)

export default ApiOffOutlineIcon
