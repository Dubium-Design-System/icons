import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const YarnOutlineIcon = ({
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
		<path d="M7.5 19.794a9 9 0 1 0 9-15.588 9 9 0 0 0-9 15.588" />
		<path d="M20.997 12A9 9 0 0 0 12 21m-2.338-8.222a9 9 0 0 0-6.643-.27" />
		<path d="M19.527 7.078a14 14 0 0 0-12.45 12.458" />
		<path d="M13.503 9.18A14 14 0 0 0 4.47 7.083" />
	</svg>
)

export default YarnOutlineIcon
