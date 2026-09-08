import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ReportOffOutlineIcon = ({
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
		<path d="M5.576 5.595A2 2 0 0 0 5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4V7a2 2 0 0 0-2-2h-2" />
		<path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2M3 3l18 18" />
	</svg>
)

export default ReportOffOutlineIcon
