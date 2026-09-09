import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ToiletPaperOffOutlineIcon = ({
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
		<path d="M4.27 4.28C3.502 5.55 3 7.639 3 10c0 3.866 1.343 7 3 7s3-3.134 3-7q0-.509-.03-1M21 10c0-3.866-1.343-7-3-7M7 3h11m3 7v7m-1.513 2.496L18 19l-3 2-3-3-3 2V10m-3 0h.01M3 3l18 18" />
	</svg>
)

export default ToiletPaperOffOutlineIcon
