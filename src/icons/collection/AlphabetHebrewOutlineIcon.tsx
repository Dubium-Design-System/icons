import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AlphabetHebrewOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M7 6c2.333 5.143 6.611 6.857 9.333 12" />
		<path d="M13.667 14c2.505-1.5 2.666-4.141 2.666-5.333C16.333 6.889 15.89 6 15.89 6M7.485 18S7 17.095 7 15.286c0-1.172.164-3.722 2.641-5.27" />
	</svg>
)

export default AlphabetHebrewOutlineIcon
