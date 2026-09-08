import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapPinCodeOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/><path d="M11.85 21.48a2 2 0 0 1-1.263-.58l-4.244-4.243a8 8 0 1 1 13.385-3.585M20 21l2-2-2-2m-3 0-2 2 2 2"/></svg>
)

export default MapPinCodeOutlineIcon
