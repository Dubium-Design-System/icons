import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CellSignal5OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M20 20H4.731a.731.731 0 0 1-.517-1.249L18.751 4.214A.731.731 0 0 1 20 4.731zM16 7v13m-4 0v-9m-4 9v-5"/></svg>
)

export default CellSignal5OutlineIcon
