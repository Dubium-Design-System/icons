import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DevicesCancelOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M13 15.5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3.5"/><path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8m4 1a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4m-5-8h2"/></svg>
)

export default DevicesCancelOutlineIcon
