import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Sphere2OutlineIcon = ({
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
		<path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" />
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
		<path d="M12 3c-1.657 0-3 4.03-3 9s1.343 9 3 9" />
	</svg>
)

export default Sphere2OutlineIcon
