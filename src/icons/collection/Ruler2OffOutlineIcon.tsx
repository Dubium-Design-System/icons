import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Ruler2OffOutlineIcon = ({
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
		<path d="M12.03 7.97 17 3l4 4-5 5m-2 2-7 7-4-4 7-7m6-3-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5M3 3l18 18" />
	</svg>
)

export default Ruler2OffOutlineIcon
