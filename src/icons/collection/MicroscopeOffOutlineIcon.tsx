import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MicroscopeOffOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M5 21h14M6 18h2m-1 0v3m3-11-1 1 3 3 1-1m2-2 3-3-3-3-3 3m-1.5 4.5L9 14m8-11 3 3m-8 15a6 6 0 0 0 5.457-3.505m.441-3.599a6 6 0 0 0-2.183-3.608M3 3l18 18" />
	</svg>
)

export default MicroscopeOffOutlineIcon
