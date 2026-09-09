import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RegexOutlineIcon = ({
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
		<path d="M6.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M17 7.875l3-1.687m-3 1.687v3.375m0-3.375-3-1.687m3 1.687 3 1.688M17 4.5v3.375m0 0-3 1.688" />
	</svg>
)

export default RegexOutlineIcon
