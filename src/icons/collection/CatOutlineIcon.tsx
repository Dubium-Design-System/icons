import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CatOutlineIcon = ({
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
		<path d="M20 3v10a8 8 0 1 1-16 0V3l3.432 3.432A7.96 7.96 0 0 1 12 5c1.769 0 3.403.574 4.728 1.546z" />
		<path d="M2 16h5l-4 4m19-4h-5l4 4m-10-4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-2-5v.01m6-.01v.01" />
	</svg>
)

export default CatOutlineIcon
