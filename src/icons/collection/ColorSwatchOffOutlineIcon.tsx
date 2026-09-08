import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ColorSwatchOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M13 13v4a4 4 0 0 0 6.832 2.825M21 17V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4"/><path d="m13 7.35-2-2a2 2 0 0 0-2.11-.461M6.76 6.763 5.344 8.178a2 2 0 0 0 0 2.828l9 9"/><path d="M7.3 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12m0-4v.01M3 3l18 18"/></svg>
)

export default ColorSwatchOffOutlineIcon
