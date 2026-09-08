import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Ironing3OutlineIcon = ({
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
		<path d="M12 15h.01M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464.81 4.865A1 1 0 0 1 19.82 18H3a7 7 0 0 1 7-7h9.8M9 15h.01M15 15h.01" />
	</svg>
)

export default Ironing3OutlineIcon
