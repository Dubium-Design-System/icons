import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FreeRightsOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M13.867 9.75c-.246-.48-.708-.769-1.2-.75h-1.334C10.597 9 10 9.67 10 10.5c0 .827.597 1.499 1.333 1.499h1.334c.736 0 1.333.671 1.333 1.5 0 .828-.597 1.499-1.333 1.499h-1.334c-.492.019-.954-.27-1.2-.75M12 7v2m0 6v2M6 6l1.5 1.5m9 9L18 18"/></svg>
)

export default FreeRightsOutlineIcon
