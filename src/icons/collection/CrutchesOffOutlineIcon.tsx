import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CrutchesOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8.178 4.174A2 2 0 0 1 10 3h4a2 2 0 1 1 0 4h-3m0 14h2m-1 0v-4.092a3 3 0 0 1 .504-1.664l.992-1.488a3 3 0 0 0 .097-.155M14 10V7m-2 14v-4.092a3 3 0 0 0-.504-1.664l-.992-1.488A3 3 0 0 1 10 12.092V10m0 1h1M3 3l18 18"/></svg>
)

export default CrutchesOffOutlineIcon
