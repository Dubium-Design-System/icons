import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BinaryTree2OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-7 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m14 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-7 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0M12 8v8m-5.684-3.504 4.368-4.992m7 4.992-4.366-4.99"/></svg>
)

export default BinaryTree2OutlineIcon
