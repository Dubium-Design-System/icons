import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ApertureOutlineIcon = ({
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
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m.6 3h10.55M6.551 4.938l3.26 10.034m7.221-10.336-8.535 6.201m12.062 3.673-8.535-6.201m.233 12.607 3.261-10.034" />
	</svg>
)

export default ApertureOutlineIcon
