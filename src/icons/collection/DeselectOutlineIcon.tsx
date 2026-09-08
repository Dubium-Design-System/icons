import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeselectOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 8h3a1 1 0 0 1 1 1v3m0 4H9a1 1 0 0 1-1-1V8m4 12v.01m4-.01v.01M8 20v.01M4 20v.01M4 16v.01M4 12v.01M4 8v.01M8 4v.01M12 4v.01M16 4v.01M20 4v.01M20 8v.01M20 12v.01M20 16v.01M3 3l18 18"/></svg>
)

export default DeselectOutlineIcon
