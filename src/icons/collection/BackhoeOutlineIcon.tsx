import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BackhoeOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M2 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2H4m0-4h9"/><path d="M8 12V7h2a3 3 0 0 1 3 3v5"/><path d="M5 15v-2a1 1 0 0 1 1-1h7m8.12-2.12L18 5l-5 5m8.12-.12A3 3 0 0 1 19 15a3 3 0 0 1-2.12-.88z"/></svg>
)

export default BackhoeOutlineIcon
