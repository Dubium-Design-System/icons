import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShieldXOutlineIcon = ({
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
		<path d="M13.252 20.601q-.613.233-1.252.399A12 12 0 0 1 3.5 6 12 12 0 0 0 12 3a12 12 0 0 0 8.5 3 12 12 0 0 1-.19 7.357M22 22l-5-5m0 5 5-5" />
	</svg>
)

export default ShieldXOutlineIcon
