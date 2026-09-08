import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HttpPutOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12h2a2 2 0 1 0 0-4H3v8m14-8h4m-2 0v8m-9-6v4a2 2 0 1 0 4 0m0-4V8M3 3l18 18"/></svg>
)

export default HttpPutOffOutlineIcon
