import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CrownOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M18 18H5L3.135 8.673a.25.25 0 0 1 .4-.244L8 12l1.6-2.4m1.596-2.394L12 6l4 6 4.464-3.571a.25.25 0 0 1 .401.244l-1.363 6.818M3 3l18 18"/></svg>
)

export default CrownOffOutlineIcon
