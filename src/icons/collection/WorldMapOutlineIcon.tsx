import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldMapOutlineIcon = ({
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
		<path d="M20 8h-2a2 2 0 0 0-2 2 2 2 0 1 1-4 0V9a2 2 0 0 0-2-2H9a2 2 0 0 1-2-2v-.5M3 12h3a2 2 0 0 1 2 2v.5A1.5 1.5 0 0 0 9.5 16a1.5 1.5 0 0 1 1.5 1.5v3.25m4-.25V17a2 2 0 0 1 2-2h3.5" />
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
	</svg>
)

export default WorldMapOutlineIcon
