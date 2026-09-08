import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceCctvOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 7H4a1 1 0 0 1-1-1V4c0-.275.11-.523.29-.704M7 3h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-9m-.64 3.35a4 4 0 1 0 5.285 5.3"/><path d="M19 7v7q0 .482-.064.947m-1.095 2.913A7 7 0 0 1 5 14V7m7 7h.01M3 3l18 18"/></svg>
)

export default DeviceCctvOffOutlineIcon
