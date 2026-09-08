import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PaintOffOutlineIcon = ({
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
		<path d="M7 3h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4M9 9H7a2 2 0 0 1-2-2V5" />
		<path d="M19 6h1a2 2 0 0 1 2 2 5 5 0 0 1-5 5m-4 0h-1v2m-2 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM3 3l18 18" />
	</svg>
)

export default PaintOffOutlineIcon
