import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClockHour11FilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-4.952 9.659.069-.006.096-.016.089-.023.099-.038.082-.04.113-.073.073-.06.074-.074.075-.094.052-.08.035-.07.051-.132.031-.135.01-.082L13 12V7a1 1 0 0 0-2 0v1.697l-.168-.252a1 1 0 0 0-1.286-.336l-.1.059a1 1 0 0 0-.278 1.387l2.018 3.027.07.087.075.074.094.075.08.052.07.035.132.051.135.031.082.01z"/></svg>
)

export default ClockHour11FilledIcon
