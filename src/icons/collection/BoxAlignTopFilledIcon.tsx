import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BoxAlignTopFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 3.005H5a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5a2 2 0 0 0-2-2M4 13.995a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L3 14.995a1 1 0 0 1 1-1m0 5a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L3 19.995a1 1 0 0 1 1-1m5 0a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L8 19.995a1 1 0 0 1 1-1m6 0a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L14 19.995a1 1 0 0 1 1-1m5 0a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 19.995a1 1 0 0 1 1-1m0-5a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 14.995a1 1 0 0 1 1-1"/></svg>
)

export default BoxAlignTopFilledIcon
