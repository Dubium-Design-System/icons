import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WindmillOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3zm0 0c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5zm0 0c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zm0 0c0-2.76-2.01-5-4.5-5S3 9.24 3 12z"/></svg>
)

export default WindmillOutlineIcon
