import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Loader4OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 21v-3m6.36.36-2.12-2.12M21 12h-3m.36-6.36-2.12 2.12M12 3v3m-6.36-.36 2.12 2.12M4 12h2m1 4.95.71-.71"/></svg>
)

export default Loader4OutlineIcon
