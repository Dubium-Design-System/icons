import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SketchingOutlineIcon = ({
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
		<path d="M4 15c2-4.97 7.356-11 9-11 4.25 0-5.5 11.958-3 13s5.65-6.678 7.4-5.902c1.75.777-1.05 7.589-.3 8.63S20.25 18.831 21 17" />
	</svg>
)

export default SketchingOutlineIcon
