import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ViewportTallOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 10V3l3 3M9 6l3-3m0 11v7l3-3m-6 0 3 3m6-18h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1M6 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1"/></svg>
)

export default ViewportTallOutlineIcon
