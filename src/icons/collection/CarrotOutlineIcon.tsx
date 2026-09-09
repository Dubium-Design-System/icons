import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CarrotOutlineIcon = ({
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
		<path d="M3 21s9.834-3.489 12.684-6.34a4.487 4.487 0 0 0 0-6.344 4.483 4.483 0 0 0-6.342 0c-2.86 2.861-6.347 12.689-6.347 12.689zm6-8-1.5-1.5M16 14l-2-2m8-4s-1.14-2-3-2c-1.406 0-3 2-3 2s1.14 2 3 2 3-2 3-2" />
		<path d="M16 2s-2 1.14-2 3 2 3 2 3 2-1.577 2-3c0-1.86-2-3-2-3" />
	</svg>
)

export default CarrotOutlineIcon
