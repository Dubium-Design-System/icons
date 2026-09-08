import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NoteOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m13 20 3.505-3.505m2-2 1.501-1.501M17 13h3V6a2 2 0 0 0-2-2H8m-3.427.6C4.218 4.96 4 5.453 4 6v12a2 2 0 0 0 2 2h7v-6c0-.272.109-.519.285-.699M3 3l18 18"/></svg>
)

export default NoteOffOutlineIcon
