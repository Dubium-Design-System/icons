import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandTetherOutlineIcon = ({
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
		<path d="M14.08 20.188c-1.15 1.083-3.02 1.083-4.17 0L2.98 13.64c-.96-.906-1.27-2.624-.69-3.831l2.4-5.018C5.16 3.8 6.41 3 7.47 3h9.06c1.06 0 2.31.802 2.78 1.79l2.4 5.019c.58 1.207.26 2.925-.69 3.83-3.453 3.293-3.466 3.279-6.94 6.549M12 15V8M8 8h8" />
	</svg>
)

export default BrandTetherOutlineIcon
