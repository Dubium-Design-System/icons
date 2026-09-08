import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DatabaseEditOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3"/><path d="M4 6v6c0 1.657 3.582 3 8 3q.718 0 1.402-.046M20 12V6"/><path d="M4 12v6c0 1.526 3.04 2.786 6.972 2.975m7.448-5.365a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"/></svg>
)

export default DatabaseEditOutlineIcon
