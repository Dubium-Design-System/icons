import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SkullOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 4c4.418 0 8 3.358 8 7.5 0 1.901-.755 3.637-2 4.96V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.54c-1.245-1.322-2-3.058-2-4.96C4 7.358 7.582 4 12 4m-2 13v3m4-3v3"/><path d="M8 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/></svg>
)

export default SkullOutlineIcon
