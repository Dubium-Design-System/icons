import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DiaperOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 8.323c0-.579 0-.868.044-1.11a2.7 2.7 0 0 1 2.17-2.169C5.453 5 5.743 5 6.323 5h11.353c.579 0 .868 0 1.11.044a2.7 2.7 0 0 1 2.169 2.17c.044.24.044.53.044 1.11V11a9 9 0 0 1-18 0zM17 9h4M3 9h4"/><path d="M14.25 19.7v-1.4a6.3 6.3 0 0 1 6.3-6.3m-10.8 7.7v-1.4a6.3 6.3 0 0 0-6.3-6.3"/></svg>
)

export default DiaperOutlineIcon
