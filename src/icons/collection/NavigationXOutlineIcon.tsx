import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NavigationXOutlineIcon = ({
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
		<path d="M16.622 13.02 12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5l1.563.53M22 22l-5-5m0 5 5-5" />
	</svg>
)

export default NavigationXOutlineIcon
