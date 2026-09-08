import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TargetOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M11.286 11.3a1 1 0 0 0 1.41 1.419"/><path d="M8.44 8.49a5 5 0 0 0 7.098 7.044m1.377-2.611a5 5 0 0 0-5.846-5.836"/><path d="M5.649 5.623a9 9 0 1 0 12.698 12.758m1.683-2.313A9 9 0 0 0 7.954 3.958M3 3l18 18"/></svg>
)

export default TargetOffOutlineIcon
