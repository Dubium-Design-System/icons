import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DotsVerticalFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M14 12a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 12 10a2 2 0 0 1 2 2m0 7a2 2 0 1 1-4 0q0-.052.005-.102A1.996 1.996 0 0 1 12 17a2 2 0 0 1 2 2m0-14a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 12 3a2 2 0 0 1 2 2"/></svg>
)

export default DotsVerticalFilledIcon
