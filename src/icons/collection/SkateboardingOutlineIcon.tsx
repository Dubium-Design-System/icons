import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SkateboardingOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5.5 15H9l.75-1.5M14 19v-5l-2.5-3L14 7"/><path d="m8 8 3-1h4l1 3h3m-1.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 18c0 .552.895 1 2 1h14c1.105 0 2-.448 2-1M6.5 21a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7.507-17a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
)

export default SkateboardingOutlineIcon
