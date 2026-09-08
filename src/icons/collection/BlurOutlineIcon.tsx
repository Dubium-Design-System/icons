import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BlurOutlineIcon = ({
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
		<path d="M12 21a9 9 0 0 0 2.32-.302 9 9 0 0 0 1.74-16.733A9 9 0 1 0 12 21m0-18v17m0-8h9m-9-3h8m-8-3h6m-6 12h6m-6-3h8" />
	</svg>
)

export default BlurOutlineIcon
