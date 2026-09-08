import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DevicesSearchOutlineIcon = ({
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
		<path d="M13 13V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2.5" />
		<path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7m4 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22M16 9h2" />
	</svg>
)

export default DevicesSearchOutlineIcon
