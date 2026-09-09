import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClockQuestionOutlineIcon = ({
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
		<path d="M20.975 11.33a9 9 0 1 0-5.717 9.06" />
		<path d="M12 7v5l2 2m5 8v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
	</svg>
)

export default ClockQuestionOutlineIcon
