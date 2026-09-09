import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TimeDuration5OutlineIcon = ({
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
		<path d="M10 15h2a1.5 1.5 0 0 0 0-3h-2V9h3.5M3 12v.01M21 12v.01M12 21v.01M7.5 4.2v.01m9 15.59v.01m-9-.01v.01M4.2 16.5v.01m15.6-.01v.01m0-9.01v.01M4.2 7.5v.01m12.3-3.304A9.04 9.04 0 0 0 12 3" />
	</svg>
)

export default TimeDuration5OutlineIcon
