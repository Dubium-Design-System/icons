import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldPinOutlineIcon = ({
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
		<path d="M20.972 11.291a9 9 0 1 0-8.322 9.686M3.6 9h16.8M3.6 15h8.9" />
		<path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.578 9.018m6.043 8.103a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01" />
	</svg>
)

export default WorldPinOutlineIcon
