import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BuildingBridge2FilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M18 6a3 3 0 0 1 3 3v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a3 3 0 0 0-6 0v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a3 3 0 0 1 3-3z"/></svg>
)

export default BuildingBridge2FilledIcon
