import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DatabaseShareOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3"/><path d="M4 6v6c0 1.657 3.582 3 8 3q.541 0 1.065-.026M20 13V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3m4 1 5-5m0 4.5V17h-4.5"/></svg>
)

export default DatabaseShareOutlineIcon
