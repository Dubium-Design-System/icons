import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BulldozerOutlineIcon = ({
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
		<path d="M2 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m7-4v4a2 2 0 0 0 2 2h1m-8 0H4m0-4h10" />
		<path d="M9 11V6h2a3 3 0 0 1 3 3v6" />
		<path d="M5 15v-3a1 1 0 0 1 1-1h8m5 6h-3" />
	</svg>
)

export default BulldozerOutlineIcon
