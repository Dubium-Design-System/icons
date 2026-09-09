import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandOnedriveOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M18.456 10.45a6.45 6.45 0 0 0-12-2.151 4.857 4.857 0 0 0-4.44 5.241 4.856 4.856 0 0 0 5.236 4.444h10.751a3.77 3.77 0 0 0 3.99-3.54 3.77 3.77 0 0 0-3.538-3.992z" />
	</svg>
)

export default BrandOnedriveOutlineIcon
