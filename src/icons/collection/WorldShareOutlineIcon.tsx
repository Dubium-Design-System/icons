import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldShareOutlineIcon = ({
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
		<path d="M20.94 13.045A9 9 0 1 0 11.987 21M3.6 9h16.8M3.6 15H13" />
		<path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.529 10.294M16 22l5-5m0 4.5V17h-4.5" />
	</svg>
)

export default WorldShareOutlineIcon
