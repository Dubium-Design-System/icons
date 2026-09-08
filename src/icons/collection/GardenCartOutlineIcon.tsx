import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GardenCartOutlineIcon = ({
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
		<path d="M15 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M6 8v11a1 1 0 0 0 1.806.591L11.5 14.5v.055" />
		<path d="M6 8h15l-3.5 7-7.1-.747a4 4 0 0 1-3.296-2.493L4.251 4.63A1 1 0 0 0 3.323 4H2" />
	</svg>
)

export default GardenCartOutlineIcon
