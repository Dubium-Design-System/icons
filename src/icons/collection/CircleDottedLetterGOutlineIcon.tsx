import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleDottedLetterGOutlineIcon = ({
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
		<path d="M14 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1M7.5 4.21v.01M4.21 7.5v.01M3 12v.01m1.21 4.49v.01m3.29 3.28v.01M12 21v.01m4.5-1.22v.01m3.29-3.3v.01M21 12v.01M19.79 7.5v.01m-3.29-3.3v.01M12 3v.01" />
	</svg>
)

export default CircleDottedLetterGOutlineIcon
