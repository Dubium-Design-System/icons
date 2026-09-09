import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BmpOutlineIcon = ({
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
		<path d="M18 16V8h2a2 2 0 1 1 0 4h-2M6 14a2 2 0 0 1-2 2H2V8h2a2 2 0 1 1 0 4H2h2a2 2 0 0 1 2 2m3 2V8l3 6 3-6v8" />
	</svg>
)

export default BmpOutlineIcon
