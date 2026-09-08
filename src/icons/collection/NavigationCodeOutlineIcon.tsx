import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NavigationCodeOutlineIcon = ({
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
		<path d="M16.653 13.086 12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116l6.246-2.117M20 21l2-2-2-2m-3 0-2 2 2 2" />
	</svg>
)

export default NavigationCodeOutlineIcon
