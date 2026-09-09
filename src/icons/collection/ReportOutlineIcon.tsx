import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ReportOutlineIcon = ({
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
		<path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.697M18 14v4h4m-4-7V7a2 2 0 0 0-2-2h-2" />
		<path d="M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2m6 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0m-6-7h4m-4 4h3" />
	</svg>
)

export default ReportOutlineIcon
