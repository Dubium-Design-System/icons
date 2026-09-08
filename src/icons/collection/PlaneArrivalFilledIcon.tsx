import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlaneArrivalFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m10.466 2.271 2.898.777a1 1 0 0 1 .708.711l1.904 7.235 4.255 1.141a3 3 0 1 1-1.539 5.799L4.203 14.052a1 1 0 0 1-.72-.765L2.136 6.715a1 1 0 0 1 1.239-1.167l2.898.776a1 1 0 0 1 .607.466l1.207 2.091 1.217.326-.098-5.954a1 1 0 0 1 1.259-.982M22 21a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1"/></svg>
)

export default PlaneArrivalFilledIcon
