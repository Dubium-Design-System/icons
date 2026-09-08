import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BulbOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7-.7.7m-6.611.783a5 5 0 0 1 5.826 5.84m-1.378 2.611A5 5 0 0 1 15 16a3.5 3.5 0 0 0-1 3 2 2 0 1 1-4 0 3.5 3.5 0 0 0-1-3 5 5 0 0 1-.528-7.544M9.7 17h4.6M3 3l18 18"/></svg>
)

export default BulbOffOutlineIcon
