import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WindOffOutlineIcon = ({
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
		<path d="M5 8h3m4 0h1.5a2.5 2.5 0 1 0-2.34-3.24M3 12h9m4 0h2.5a2.5 2.5 0 0 1 1.801 4.282M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24M3 3l18 18" />
	</svg>
)

export default WindOffOutlineIcon
