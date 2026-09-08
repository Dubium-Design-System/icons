import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const JetpackOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 6a3 3 0 1 0-6 0v7h6zm4 7h6V6a3 3 0 0 0-6 0zm-9 3q0 3.5 2 5 2-1.5 2-5m6 0q0 3.5 2 5 2-1.5 2-5m-9-8h4m-4 3h4"/></svg>
)

export default JetpackOutlineIcon
