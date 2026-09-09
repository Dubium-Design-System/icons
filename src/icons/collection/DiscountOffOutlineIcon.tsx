import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DiscountOffOutlineIcon = ({
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
		<path d="m9 15 3-3m2-2 1-1m-5.852.145A.498.498 0 0 0 9.5 10a.5.5 0 0 0 .35-.142m4.298 4.287A.498.498 0 0 0 14.5 15a.5.5 0 0 0 .35-.142" />
		<path d="M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M3 3l18 18" />
	</svg>
)

export default DiscountOffOutlineIcon
