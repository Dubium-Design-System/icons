import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DropCircleFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-4.177 4.092a1 1 0 0 0-1.646 0l-2.602 3.764c-1.022 1.67-.634 3.736.875 4.929a4.144 4.144 0 0 0 5.095 0c1.51-1.191 1.897-3.26.904-4.882z"/></svg>
)

export default DropCircleFilledIcon
