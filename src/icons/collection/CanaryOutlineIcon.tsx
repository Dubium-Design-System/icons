import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CanaryOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 20v-2m3-9.99v.01M3 17l8-8V8a4 4 0 1 1 8 0h2l-2 2v1a7 7 0 0 1-13.215 3.223"/></svg>
)

export default CanaryOutlineIcon
