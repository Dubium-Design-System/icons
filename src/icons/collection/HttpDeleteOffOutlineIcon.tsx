import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HttpDeleteOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm11 0h-2m-2 2v6h4m-4-4h2m5-4v5m3 3h1M3 3l18 18"/></svg>
)

export default HttpDeleteOffOutlineIcon
