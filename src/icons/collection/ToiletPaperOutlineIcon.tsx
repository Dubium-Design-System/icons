import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ToiletPaperOutlineIcon = ({
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
		<path d="M3 10a3 7 0 1 0 6 0 3 7 0 1 0-6 0m18 0c0-3.866-1.343-7-3-7M6 3h12m3 7v10l-3-1-3 2-3-3-3 2V10m-3 0h.01" />
	</svg>
)

export default ToiletPaperOutlineIcon
