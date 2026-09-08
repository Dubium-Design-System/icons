import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TractorOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4 0v.01M17 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-6.5 0H17"/><path d="M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5"/><path d="M18 5h-1a1 1 0 0 0-1 1v4"/></svg>
)

export default TractorOutlineIcon
