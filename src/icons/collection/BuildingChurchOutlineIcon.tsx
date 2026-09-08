import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BuildingChurchOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 21h18m-11 0v-4a2 2 0 0 1 4 0v4M10 5h4m-2-2v5"/><path d="M6 21v-7m-2 2 8-8 8 8m-2-2v7"/></svg>
)

export default BuildingChurchOutlineIcon
