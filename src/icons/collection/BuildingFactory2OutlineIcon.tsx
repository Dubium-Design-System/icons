import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BuildingFactory2OutlineIcon = ({
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
		<path d="M3 21h18M5 21V9l5 4V9l5 4h4" />
		<path d="M19 21v-8l-1.436-9.574A.5.5 0 0 0 17.069 3h-1.145a.5.5 0 0 0-.494.418L14 12m-5 5h1m4 0h1" />
	</svg>
)

export default BuildingFactory2OutlineIcon
