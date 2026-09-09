import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodShareOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M20.942 13.018A9 9 0 1 0 12 21M9 10h.01M15 10h.01" />
		<path d="M9.5 15c.658.672 1.56 1 2.5 1q.32 0 .63-.05M16 22l5-5m0 4.5V17h-4.5" />
	</svg>
)

export default MoodShareOutlineIcon
