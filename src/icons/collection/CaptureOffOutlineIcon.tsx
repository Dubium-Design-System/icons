import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CaptureOffOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2c.554 0 1.055-.225 1.417-.589M9.87 9.887a3 3 0 0 0 4.255 4.23m.58-3.416a3 3 0 0 0-1.4-1.403M4 8V6c0-.548.22-1.044.577-1.405M3 3l18 18" />
	</svg>
)

export default CaptureOffOutlineIcon
