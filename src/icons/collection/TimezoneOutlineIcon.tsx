import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TimezoneOutlineIcon = ({
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
		<path d="M20.884 10.554a9 9 0 1 0-10.337 10.328M3.6 9h16.8M3.6 15h6.9" />
		<path d="M11.5 3a17 17 0 0 0-1.502 14.954M12.5 3a17 17 0 0 1 2.52 7.603M14 18a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
		<path d="M18 16.5V18l.5.5" />
	</svg>
)

export default TimezoneOutlineIcon
