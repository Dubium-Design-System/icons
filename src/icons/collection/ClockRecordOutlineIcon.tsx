import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClockRecordOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M21 12.3a9 9 0 1 0-8.683 8.694"/><path d="M12 7v5l2 2m2 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/></svg>
)

export default ClockRecordOutlineIcon
