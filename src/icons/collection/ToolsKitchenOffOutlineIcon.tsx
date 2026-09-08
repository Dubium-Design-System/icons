import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ToolsKitchenOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 3h5l-.5 4.5m-.4 3.595L11 12H5l-.875-7.874M7 18h2v3H7zm8.225-6.784C15.645 8.698 16.814 6.039 20 3v12h-1m1 0v1m0 4v1h-1v-2M8 12v6M3 3l18 18"/></svg>
)

export default ToolsKitchenOffOutlineIcon
