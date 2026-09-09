import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RainbowOffOutlineIcon = ({
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
		<path d="M22 17c0-5.523-4.477-10-10-10q-.462 0-.914.041m-3.208.845A10 10 0 0 0 2 17m9.088-5.931A6 6 0 0 0 6 17m8 0a2 2 0 1 0-4 0M3 3l18 18" />
	</svg>
)

export default RainbowOffOutlineIcon
