import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CarFan1OutlineIcon = ({
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
		<path d="M12 12V3l4.912 1.914a1.7 1.7 0 0 1 .428 2.925zm2.424 3.03L12 12h6m-6 0H3l1.914-4.912a1.7 1.7 0 0 1 2.925-.428zm0 0v9l-4.912-1.914a1.7 1.7 0 0 1-.428-2.925zm6 5 2-2v6" />
	</svg>
)

export default CarFan1OutlineIcon
