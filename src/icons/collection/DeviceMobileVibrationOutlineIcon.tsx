import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceMobileVibrationOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm5-1h2M9 17v.01M21 6l-2 3 2 3-2 3 2 3"/></svg>
)

export default DeviceMobileVibrationOutlineIcon
