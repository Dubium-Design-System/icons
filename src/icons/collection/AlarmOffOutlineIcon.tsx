import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AlarmOffOutlineIcon = ({
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
		<path d="M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35-2.645a7 7 0 0 0-8.536-8.56" />
		<path d="M12 12v1h1M5.261 5.265 4.25 6M17 4l2.75 2M3 3l18 18" />
	</svg>
)

export default AlarmOffOutlineIcon
