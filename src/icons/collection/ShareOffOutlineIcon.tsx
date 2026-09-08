import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShareOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m12-6a3 3 0 1 0 6 0 3 3 0 1 0-6 0m.861 9.896a3 3 0 0 0 4.265 4.22m.578-3.417a3 3 0 0 0-1.507-1.45M8.7 10.7l1.336-.688M12.66 8.66 15.3 7.3m-6.6 6 6.6 3.4M3 3l18 18"/></svg>
)

export default ShareOffOutlineIcon
