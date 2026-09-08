import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TagsOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m16.296 12.296-5.71-5.71M6 6H5a2 2 0 0 0-2 2v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.278-3.278M18 19l.496-.496m1.888-2.137a4.82 4.82 0 0 0-.792-5.775L15 6m-8 4h-.01M3 3l18 18"/></svg>
)

export default TagsOffOutlineIcon
