import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GoGameOutlineIcon = ({
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
		<path d="M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-6 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 12h7m4 0h7M3 6h1m4 0h13M3 18h1m4 0h8m4 0h1M6 3v1m0 4v8m0 4v1m6-18v7m0 4v7m6-18v13m0 4v1" />
	</svg>
)

export default GoGameOutlineIcon
