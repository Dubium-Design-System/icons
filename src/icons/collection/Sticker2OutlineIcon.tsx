import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Sticker2OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M6 4h12a2 2 0 0 1 2 2v7h-5a2 2 0 0 0-2 2v5H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/><path d="M20 13v.172a2 2 0 0 1-.586 1.414l-4.828 4.828a2 2 0 0 1-1.414.586H13"/></svg>
)

export default Sticker2OutlineIcon
