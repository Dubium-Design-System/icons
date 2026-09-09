import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Ruler2OutlineIcon = ({
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
		<path d="m17 3 4 4L7 21l-4-4zm-1 4-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5" />
	</svg>
)

export default Ruler2OutlineIcon
