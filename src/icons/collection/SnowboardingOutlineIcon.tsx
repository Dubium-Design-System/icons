import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SnowboardingOutlineIcon = ({
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
		<path d="M15 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 19l4-2.5-.5-1.5m5.5 6-1-6-4.5-3L14 6" />
		<path d="m7 9 1.5-3H14l2 4 3 1M3 17q.598 1.732 1.5 1.951c6 1.464 10.772 2.262 13.5 2.927q2 .488 3-.976" />
	</svg>
)

export default SnowboardingOutlineIcon
