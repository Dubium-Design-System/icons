import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandJiraOutlineIcon = ({
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
		<path d="M20 4h-9v1.5A2.5 2.5 0 0 0 13.5 8H15a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5H20z" />
		<path d="M15 8H7v1.5A2.5 2.5 0 0 0 9.5 12H11a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5H16V9a1 1 0 0 0-1-1" />
		<path d="M11 12H3v1.5A2.5 2.5 0 0 0 5.5 16H7a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5H12v-8a1 1 0 0 0-1-1" />
	</svg>
)

export default BrandJiraOutlineIcon
