import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeLinkOutlineIcon = ({
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
		<path d="M20.085 11.085 12 3l-9 9h2v7a2 2 0 0 0 2 2h4.5" />
		<path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.807 1.143M20 21a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0-5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
		<path d="m21 16-5 3 5 2" />
	</svg>
)

export default HomeLinkOutlineIcon
