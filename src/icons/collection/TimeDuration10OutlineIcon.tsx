import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TimeDuration10OutlineIcon = ({
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
		<path d="M9 9v6m3-4v2a2 2 0 1 0 4 0v-2a2 2 0 1 0-4 0m-9 1v.01M21 12v.01M12 21v.01M7.5 4.2v.01m9 15.59v.01m-9-.01v.01M4.2 16.5v.01m15.6-.01v.01M4.2 7.5v.01m15.61.017A9 9 0 0 0 12 3" />
	</svg>
)

export default TimeDuration10OutlineIcon
