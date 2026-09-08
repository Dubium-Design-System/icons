import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeShareOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 21v-6a2 2 0 0 1 2-2h2c.247 0 .484.045.702.127"/><path d="M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5m4 1 5-5m0 4.5V17h-4.5"/></svg>
)

export default HomeShareOutlineIcon
