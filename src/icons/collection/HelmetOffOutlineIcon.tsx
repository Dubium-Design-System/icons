import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HelmetOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8.633 4.654a9 9 0 0 1 11.718 11.7m-1.503 2.486A9 9 0 0 1 17.656 20H6.344a9 9 0 0 1-.185-13.847"/><path d="M20 9h-7m-2.768 1.246q.76 3 3.268 4.254.786.393 1.64.683M3 3l18 18"/></svg>
)

export default HelmetOffOutlineIcon
