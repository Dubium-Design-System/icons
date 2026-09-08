import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AdjustmentsCheckOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-6v4m0 4v8m7.823-4.824a2 2 0 1 0-2.638 2.651M12 4v10m4-7a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v5m-3 5 2 2 4-4"/></svg>
)

export default AdjustmentsCheckOutlineIcon
