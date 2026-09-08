import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandDolbyDigitalOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M21 6v12h-.89c-3.34 0-6.047-2.686-6.047-6s2.707-6 6.046-6zM3.063 6v12h.891C7.294 18 10 15.314 10 12S7.293 6 3.954 6z"/></svg>
)

export default BrandDolbyDigitalOutlineIcon
