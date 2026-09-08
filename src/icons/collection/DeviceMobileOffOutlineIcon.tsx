import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceMobileOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7.159 3.185C7.415 3.066 7.699 3 8 3h8a2 2 0 0 1 2 2v9m0 4v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6m5-2h2M3 3l18 18m-9-4v.01"/></svg>
)

export default DeviceMobileOffOutlineIcon
