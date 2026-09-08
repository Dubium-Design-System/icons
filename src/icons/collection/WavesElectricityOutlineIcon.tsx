import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WavesElectricityOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1M3 16c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1M3 8c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1m7-1-3 5h4l-3 5"/></svg>
)

export default WavesElectricityOutlineIcon
