import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeDownOutlineIcon = ({
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
		<path d="M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5" />
		<path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m4 1v6m3-3-3 3-3-3" />
	</svg>
)

export default HomeDownOutlineIcon
