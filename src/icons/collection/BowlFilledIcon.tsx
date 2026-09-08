import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BowlFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M20 7a2 2 0 0 1 2 2v.5c0 1.694-2.247 5.49-3.983 6.983l-.017.013V17a2 2 0 0 1-1.85 1.995L16 19H8a2 2 0 0 1-2-2v-.496l-.065-.053c-1.76-1.496-3.794-4.965-3.928-6.77L2 9.5V9a2 2 0 0 1 2-2z"/></svg>
)

export default BowlFilledIcon
