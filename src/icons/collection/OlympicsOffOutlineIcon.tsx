import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const OlympicsOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M6 6a3 3 0 1 0 3 3m6 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M9 9a3 3 0 0 0 3 3m2.566-1.445a3 3 0 0 0-4.135-4.113M6 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M12.878 12.88a3 3 0 0 0 4.239 4.247m.586-3.431a3 3 0 0 0-1.43-1.414M3 3l18 18"/></svg>
)

export default OlympicsOffOutlineIcon
