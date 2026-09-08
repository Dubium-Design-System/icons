import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MedicineSyrupOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 21h8a1 1 0 0 0 1-1V10a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v10a1 1 0 0 0 1 1m2-7h4m-2-2v4m-2-9V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3"/></svg>
)

export default MedicineSyrupOutlineIcon
