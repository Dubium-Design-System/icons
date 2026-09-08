import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceIpadOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M6 2h12a2 2 0 0 1 2 2v12m0 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4m5 15h6M3 3l18 18"/></svg>
)

export default DeviceIpadOffOutlineIcon
