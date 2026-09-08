import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandTeamsOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 7h10v10H3zm3 3h4m-2 0v4"/><path d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5-5V9h-5m5 9a4 4 0 0 0 4-4V9h-4"/><path d="M13.003 8.83a3 3 0 1 0-1.833-1.833"/><path d="M15.83 8.36a2.5 2.5 0 1 0 .594-4.117"/></svg>
)

export default BrandTeamsOutlineIcon
