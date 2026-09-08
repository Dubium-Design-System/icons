import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ZoomOutAreaOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M13 15h4m-7 0a5 5 0 1 0 10 0 5 5 0 1 0-10 0m12 7-3-3M6 18H5a2 2 0 0 1-2-2v-1m0-4v-1m0-4V5a2 2 0 0 1 2-2h1m4 0h1m4 0h1a2 2 0 0 1 2 2v1"/></svg>
)

export default ZoomOutAreaOutlineIcon
