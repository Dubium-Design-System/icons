import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AccessPointOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 12v.01m2.828-2.838a4 4 0 0 1 0 5.656m2.829-8.485a8 8 0 0 1 0 11.314m-8.489-2.829a4 4 0 0 1 0-5.656m-2.831 8.485a8 8 0 0 1 0-11.314"/></svg>
)

export default AccessPointOutlineIcon
