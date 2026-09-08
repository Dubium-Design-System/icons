import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandPeanutOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m15 16.25-.816-.36-.462-.196c-1.444-.592-2-.593-3.447 0l-.462.195-.817.359a4.5 4.5 0 1 1 0-8.49l1.054.462.434.178c1.292.507 1.863.48 3.237-.082l.462-.195.817-.359a4.5 4.5 0 1 1 0 8.49"/></svg>
)

export default BrandPeanutOutlineIcon
