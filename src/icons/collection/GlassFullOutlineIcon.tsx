import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GlassFullOutlineIcon = ({
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
		<path d="M8 21h8m-4-6v6m5-18 1 7c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-7z" />
		<path d="M6 10a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
	</svg>
)

export default GlassFullOutlineIcon
