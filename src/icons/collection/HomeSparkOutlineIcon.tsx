import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeSparkOutlineIcon = ({
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
		<path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 0 0 2 2h5" />
		<path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m4 7.5a4.75 4.75 0 0 1 3.5-3.5 4.75 4.75 0 0 1-3.5-3.5 4.75 4.75 0 0 1-3.5 3.5 4.75 4.75 0 0 1 3.5 3.5" />
	</svg>
)

export default HomeSparkOutlineIcon
