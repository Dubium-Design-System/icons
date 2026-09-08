import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceIpadHorizontalOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 4h12a2 2 0 0 1 2 2v12m-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m5 13h6M3 3l18 18"/></svg>
)

export default DeviceIpadHorizontalOffOutlineIcon
