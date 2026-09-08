import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BarrierBlockFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M15 21a1 1 0 0 1 0-2h1v-2H8v2h1a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h1v-2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a1 1 0 1 1 2 0v1h8V5a1 1 0 0 1 2 0v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1v2h1a1 1 0 0 1 0 2zM12.914 8l-7 7h4.17L17 8zM19 10.914 14.914 15H19zM8.084 8H5v3.084z"/></svg>
)

export default BarrierBlockFilledIcon
