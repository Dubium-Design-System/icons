import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlaneFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M12.868 2.504 16.58 9H20a3 3 0 0 1 0 6h-3.42l-3.712 6.496A1 1 0 0 1 12 22H9a1 1 0 0 1-.962-1.275L9.674 15h-2.26l-1.707 1.707A1 1 0 0 1 5 17H2a1 1 0 0 1-.894-1.447L2.882 12 1.106 8.447A1 1 0 0 1 2 7h3a1 1 0 0 1 .707.293L7.414 9h2.26L8.038 3.275A1 1 0 0 1 9 2h3a1 1 0 0 1 .868.504"/></svg>
)

export default PlaneFilledIcon
