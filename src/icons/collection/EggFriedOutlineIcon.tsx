import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EggFriedOutlineIcon = ({
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
		<path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
		<path d="M14 3a5 5 0 0 1 4.872 6.13 3 3 0 0 1 .178 5.681 3 3 0 1 1-4.684 3.626 5 5 0 1 1-8.662-5 5 5 0 1 1 4.645-8.856A4.98 4.98 0 0 1 14 2.996z" />
	</svg>
)

export default EggFriedOutlineIcon
