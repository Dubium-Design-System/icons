import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AirBalloonOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 21v-3h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m0-3c-2.347-2.169-5-5.226-5-8a8 8 0 1 1 16 0c0 2.774-2.653 5.831-5 8m-9.5-4h13"/><path d="M10 14c-1.69-4.712-.924-8.197 0-11.602M14 14c1.469-3.867 1.19-7.735 0-11.602"/></svg>
)

export default AirBalloonOutlineIcon
