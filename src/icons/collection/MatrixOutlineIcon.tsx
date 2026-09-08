import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MatrixOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 16h.013m3.997 0h.005m4 0h.005m-.005-4h.005m-8.01 0h.005m3.995 0h.005m4.005-4h.005m-8.01 0h.005m3.995 0h.005M7 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-1"/></svg>
)

export default MatrixOutlineIcon
