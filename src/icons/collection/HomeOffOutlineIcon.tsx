import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeOffOutlineIcon = ({
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
		<path d="M5 12H3l4.497-4.497m2-2 2.504-2.504 9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4v-3" />
		<path d="M9 21v-6a2 2 0 0 1 2-2h2m2 2v6M3 3l18 18" />
	</svg>
)

export default HomeOffOutlineIcon
