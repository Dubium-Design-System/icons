import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HandFingerRightOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 8h8.5a1.5 1.5 0 0 1 0 3H13m.5 0h2a1.5 1.5 0 0 1 0 3H13m1.5 0a1.5 1.5 0 0 1 0 3H13"/><path d="M13.5 17a1.5 1.5 0 1 1 0 3H9a6 6 0 0 1-6-6v-2 .208a6 6 0 0 1 2.7-5.012L6 7q.718-.468 5.728-3.286a1.5 1.5 0 0 1 2.022.536c.44.734.325 1.674-.28 2.28L12 8"/></svg>
)

export default HandFingerRightOutlineIcon
