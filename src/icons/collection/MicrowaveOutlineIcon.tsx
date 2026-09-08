import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MicrowaveOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm12-1v12m3-6h.01M18 15h.01M18 9h.01"/><path d="M6.5 10.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0m-5 3c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0"/></svg>
)

export default MicrowaveOutlineIcon
