import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ScaleOffOutlineIcon = ({
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
		<path d="M7 20h10M9.452 5.425 12 5l6 1m-6-3v5m0 4v8m-3-8L6 6l-3 6a3 3 0 0 0 6 0m9.873 2.871A3 3 0 0 0 21 12l-3-6-2.677 5.355M3 3l18 18" />
	</svg>
)

export default ScaleOffOutlineIcon
