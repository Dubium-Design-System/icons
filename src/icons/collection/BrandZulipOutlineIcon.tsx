import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandZulipOutlineIcon = ({
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
		<path d="M6.5 3h11C18.825 3 20 4 20 5.5c0 2-1.705 3.264-2 3.5l-4.5 4 2-5h-9a2.5 2.5 0 0 1 0-5" />
		<path d="M17.5 21h-11C5.175 21 4 20 4 18.5c0-2 1.705-3.264 2-3.5l4.5-4-2 5h9a2.5 2.5 0 1 1 0 5" />
	</svg>
)

export default BrandZulipOutlineIcon
