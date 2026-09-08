import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HttpPatchOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12h2a2 2 0 1 0 0-4H3v8m7 0v-6a2 2 0 1 1 4 0v6m-4-3h4m3-5h4m-2 0v8"/></svg>
)

export default HttpPatchOutlineIcon
