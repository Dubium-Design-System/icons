import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HttpConnectOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 10a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0m10-1V8l4 8V8m-7 6a2 2 0 1 1-4 0v-4m2-2a2 2 0 0 1 2 2M3 3l18 18"/></svg>
)

export default HttpConnectOffOutlineIcon
