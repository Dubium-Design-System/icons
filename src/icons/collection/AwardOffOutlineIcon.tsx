import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AwardOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M16.72 12.704a6 6 0 0 0-8.433-8.418m-1.755 2.24a6 6 0 0 0 7.936 7.944"/><path d="m12 15 3.4 5.89 1.598-3.233.707.046m1.108-2.902-1.617-2.8M6.802 12l-3.4 5.89L7 17.657l1.598 3.232 3.4-5.889M3 3l18 18"/></svg>
)

export default AwardOffOutlineIcon
