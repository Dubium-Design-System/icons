import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Number34SmallOutlineIcon = ({
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
		<path d="M14 8v3a1 1 0 0 0 1 1h3m0-4v8M6 8h2.5A1.5 1.5 0 0 1 10 9.5v1A1.5 1.5 0 0 1 8.5 12H7h1.5a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 16H6" />
	</svg>
)

export default Number34SmallOutlineIcon
