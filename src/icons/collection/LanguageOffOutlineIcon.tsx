import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LanguageOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m12 20 2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M8.747 8.748C8.087 11.582 6.211 13 4 13m0-6.629h2.371"/><path d="M5 9c0 2.144 2.252 3.908 6 4M3 3l18 18"/></svg>
)

export default LanguageOffOutlineIcon
