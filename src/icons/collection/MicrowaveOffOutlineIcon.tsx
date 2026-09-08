import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MicrowaveOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M18 18H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2m4 0h10a1 1 0 0 1 1 1v10M15 6v5m0 4v3m3-6h.01M18 9h.01"/><path d="M6.5 10.5c1-.667 1.5-.667 2.5 0 .636.265 1.272.665 1.907.428M6.5 13.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0M3 3l18 18"/></svg>
)

export default MicrowaveOffOutlineIcon
