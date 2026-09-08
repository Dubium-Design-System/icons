import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EaseInControlPointOutlineIcon = ({
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
		<path d="M3 19c8 0 18-16 18-16m-4 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-2m-3 0h-2" />
	</svg>
)

export default EaseInControlPointOutlineIcon
