import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TabCloseOutlineIcon = ({
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
		<path d="M3 21v-1a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1M6 15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2m-3-9-3 3-3-3m3 3V3" />
	</svg>
)

export default TabCloseOutlineIcon
