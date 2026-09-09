import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TankOutlineIcon = ({
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
		<path d="M2 15a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3m4-3 1-5h5l3 5m6-3h-7.8" />
	</svg>
)

export default TankOutlineIcon
