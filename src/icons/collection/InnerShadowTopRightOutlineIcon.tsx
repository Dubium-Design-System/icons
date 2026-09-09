import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const InnerShadowTopRightOutlineIcon = ({
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
		<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18" />
		<path d="M18 12a6 6 0 0 0-6-6" />
	</svg>
)

export default InnerShadowTopRightOutlineIcon
