import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeEditOutlineIcon = ({
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
		<path d="M9 21v-6a2 2 0 0 1 2-2h2c.645 0 1.218.305 1.584.78" />
		<path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h4m7.42-5.39a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" />
	</svg>
)

export default HomeEditOutlineIcon
