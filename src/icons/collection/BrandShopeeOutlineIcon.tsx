import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandShopeeOutlineIcon = ({
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
		<path d="m4 7 .867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2-1.857L20.01 7zm4.5 0c0-1.653 1.5-4 3.5-4s3.5 2.347 3.5 4" />
		<path d="M9.5 17c.413.462 1 1 2.5 1s2.5-.897 2.5-2-1-1.5-2.5-2-2-1.47-2-2c0-1.104 1-2 2-2s1.5 0 2.5 1" />
	</svg>
)

export default BrandShopeeOutlineIcon
