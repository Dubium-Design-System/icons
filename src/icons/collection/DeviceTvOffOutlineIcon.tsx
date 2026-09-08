import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceTvOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M11 7h8a2 2 0 0 1 2 2v8m-1.178 2.824c-.25.113-.529.176-.822.176H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m9-4-4 4-4-4M3 3l18 18"/></svg>
)

export default DeviceTvOffOutlineIcon
