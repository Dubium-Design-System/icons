import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HttpHeadOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 16V8m4 0v8m-4-4h4m7-4h-4v8h4m-4-4h2.5m4.5 4v-6a2 2 0 1 1 4 0v6m-4-3h4"/></svg>
)

export default HttpHeadOutlineIcon
