import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SockOutlineIcon = ({
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
		<path d="M13 3v6l4.798 5.142a4 4 0 0 1-5.441 5.86l-6.736-6.41A2 2 0 0 1 5 12.141V3z" />
		<path d="M7.895 15.768C8.603 15.047 9 14.091 9 13a4 4 0 0 0-4-4" />
	</svg>
)

export default SockOutlineIcon
