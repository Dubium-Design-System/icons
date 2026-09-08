import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AnalyzeOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M20 11a8.1 8.1 0 0 0-6.986-6.918 8.1 8.1 0 0 0-4.31.62M6.321 6.31A8 8 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 13.687 4.676M20 16a1 1 0 0 0-1-1"/><path d="M4 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5.888 1.87a3 3 0 1 0 4.233 4.252m.595-3.397A3 3 0 0 0 13.29 9.29M3 3l18 18"/></svg>
)

export default AnalyzeOffOutlineIcon
