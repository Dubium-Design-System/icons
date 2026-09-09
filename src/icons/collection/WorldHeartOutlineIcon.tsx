import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldHeartOutlineIcon = ({
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
		<path d="M21 12a9 9 0 1 0-9.679 8.974M3.6 9h16.8M3.6 15h6.9" />
		<path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.556 8.136M18 22l3.35-3.284a2.143 2.143 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.129-.006l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.071z" />
	</svg>
)

export default WorldHeartOutlineIcon
