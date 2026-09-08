import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ContractOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 21H6a3 3 0 0 1-3-3v-1h5.5M17 8.5V5a2 2 0 1 1 2 2h-2"/><path d="M19 3H8a3 3 0 0 0-3 3v11M9 7h4m-4 4h4m5.42 1.61a2.1 2.1 0 0 1 2.97 2.97L15 22h-3v-3z"/></svg>
)

export default ContractOutlineIcon
