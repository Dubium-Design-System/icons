import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SortAscendingNumbersOutlineIcon = ({
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
		<path d="m4 15 3 3 3-3M7 6v12M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2m-2 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
		<path d="M19 16v3a2 2 0 0 1-2 2h-1.5" />
	</svg>
)

export default SortAscendingNumbersOutlineIcon
