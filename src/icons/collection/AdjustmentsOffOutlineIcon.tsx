import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AdjustmentsOffOutlineIcon = ({
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
		<path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-4v2m0 4v8m4-4a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-12v4m0 4v2m0 4v2m4-13a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v5m0 4v2M3 3l18 18" />
	</svg>
)

export default AdjustmentsOffOutlineIcon
