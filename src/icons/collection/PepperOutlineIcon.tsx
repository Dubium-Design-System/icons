import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PepperOutlineIcon = ({
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
		<path d="M13 11c0 2.21-2.239 4-5 4s-5-1.79-5-4a8 8 0 1 0 16 0 3 3 0 0 0-6 0" />
		<path d="M16 8c0-2 2-4 4-4" />
	</svg>
)

export default PepperOutlineIcon
