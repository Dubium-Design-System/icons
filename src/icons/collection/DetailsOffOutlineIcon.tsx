import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DetailsOffOutlineIcon = ({
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
		<path d="M5 19h14m1.986-2.016a2 2 0 0 0-.146-.734L13.74 4a2 2 0 0 0-3.5 0l-.821 1.417M7.95 7.951 3.14 16.25A2 2 0 0 0 4.89 19M12 3v5m0 4v7M3 3l18 18" />
	</svg>
)

export default DetailsOffOutlineIcon
