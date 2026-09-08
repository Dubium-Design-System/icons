import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapCancelOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 18.5 9 17l-6 3V7l6-3 6 3 6-3v8M9 4v13m6-10v6m1 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4"/></svg>
)

export default MapCancelOutlineIcon
