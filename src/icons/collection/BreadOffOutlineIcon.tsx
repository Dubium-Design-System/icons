import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BreadOffOutlineIcon = ({
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
		<path d="m8 4 10 .005V4a3 3 0 0 1 2 5.235V16m-.59 3.418c-.36.36-.86.582-1.41.582H6a2 2 0 0 1-2-2V9.236a3 3 0 0 1 .418-4.785M3 3l18 18" />
	</svg>
)

export default BreadOffOutlineIcon
