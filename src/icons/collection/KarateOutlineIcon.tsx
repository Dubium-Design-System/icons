import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const KarateOutlineIcon = ({
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
		<path d="m3 9 4.5 1 3 2.5M13 21v-8l3-5.5" />
		<path d="m8 4.5 4 2 4 1 4 3.5-2 3.5M15.007 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
	</svg>
)

export default KarateOutlineIcon
