import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandGraphqlOutlineIcon = ({
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
		<path d="m4 8 8-5 8 5v8l-8 5-8-5z" />
		<path d="m12 4 7.5 12h-15z" />
		<path d="M11 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0m16 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
	</svg>
)

export default BrandGraphqlOutlineIcon
