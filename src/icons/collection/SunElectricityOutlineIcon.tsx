import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SunElectricityOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 12a4 4 0 0 0 4 4m0-8a4 4 0 0 0-4 4m-5 0h1m8-9v1m0 16v1M5.6 5.6l.7.7m0 11.4-.7.7M20 7l-3 5h4l-3 5"/></svg>
)

export default SunElectricityOutlineIcon
