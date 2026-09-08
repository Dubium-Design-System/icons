import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ExposureOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m3.6 20.4 8.371-8.371m2.04-2.04L20.4 3.6M6 8h2m0 0v2m6 6h2M7 3h12a2 2 0 0 1 2 2v12m-.5 3.5c-.362.36-.95.5-1.5.5H5a2 2 0 0 1-2-2V5c0-.541.215-1.033.565-1.393M3 3l18 18"/></svg>
)

export default ExposureOffOutlineIcon
