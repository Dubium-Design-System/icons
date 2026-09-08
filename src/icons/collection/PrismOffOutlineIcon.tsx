import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PrismOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 12v10m5.957-4.048-4.937 3.703a1.7 1.7 0 0 1-2.04 0L5 17.17a2.5 2.5 0 0 1-1-2V4m3-1h12a1 1 0 0 1 1 1v11.17q0 .377-.109.729"/><path d="M12.688 8.7a1.7 1.7 0 0 0 .357-.214L19.7 3.3M3 3l18 18"/></svg>
)

export default PrismOffOutlineIcon
