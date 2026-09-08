import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArticleOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 4h11a2 2 0 0 1 2 2v11m-1.172 2.821A2 2 0 0 1 19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 1.156-1.814M7 8h1m4 0h5M7 12h5m4 0h1M7 16h9M3 3l18 18"/></svg>
)

export default ArticleOffOutlineIcon
