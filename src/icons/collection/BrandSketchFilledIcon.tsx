import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandSketchFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M7.554 3.004h8.929a2 2 0 0 1 1.647.873l3.536 5.193a2.006 2.006 0 0 1-.173 2.48l-8 8.79a2.007 2.007 0 0 1-2.97 0l-8-8.789a1 1 0 0 1-.13-.175l-.012-.026-.051-.072a2.01 2.01 0 0 1-.056-2.063l.09-.146 3.541-5.193c.372-.544.987-.87 1.649-.872"/></svg>
)

export default BrandSketchFilledIcon
