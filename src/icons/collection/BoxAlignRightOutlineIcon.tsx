import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BoxAlignRightOutlineIcon = ({
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
		<path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-5 0h.01m-5.011 0h.011m-.011-5.001h.011m-.011-6h.011m-.011-5h.011m4.99 0h.01" />
	</svg>
)

export default BoxAlignRightOutlineIcon
