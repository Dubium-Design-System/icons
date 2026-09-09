import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WiperOutlineIcon = ({
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
		<path d="M11 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 9l5.5 5.5a5 5 0 0 1 7 0L21 9A12 12 0 0 0 3 9m9 9L9.8 5.2" />
	</svg>
)

export default WiperOutlineIcon
