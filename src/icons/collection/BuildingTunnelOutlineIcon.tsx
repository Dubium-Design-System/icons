import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BuildingTunnelOutlineIcon = ({
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
		<path d="M5 21h14a2 2 0 0 0 2-2v-7a9 9 0 0 0-18 0v7a2 2 0 0 0 2 2" />
		<path d="M8 21v-9a4 4 0 1 1 8 0v9M3 17h4m10 0h4m0-5h-4M7 12H3m9-9v5M6 6l3 3m6 0 3-3z" />
	</svg>
)

export default BuildingTunnelOutlineIcon
