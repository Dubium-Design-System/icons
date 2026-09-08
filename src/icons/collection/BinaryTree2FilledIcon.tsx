import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BinaryTree2FilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 3a3 3 0 0 1 2.616 4.47l3.274 3.742a3 3 0 1 1-1.505 1.318L13.11 8.787l-.11.042v6.342a3.001 3.001 0 1 1-2 0V8.829l-.111-.041-3.274 3.742a3 3 0 1 1-1.505-1.318L9.383 7.47A3 3 0 0 1 12 3"/></svg>
)

export default BinaryTree2FilledIcon
