import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceLandlinePhoneOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M20 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-4 1H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11"/><path d="M12 8H6v3h6zm0 6v.01M9 14v.01M6 14v.01M12 17v.01M9 17v.01M6 17v.01"/></svg>
)

export default DeviceLandlinePhoneOutlineIcon
