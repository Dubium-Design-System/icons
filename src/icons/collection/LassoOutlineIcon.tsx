import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LassoOutlineIcon = ({
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
		<path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-3.866 4.03-7 9-7s9 3.134 9 7-4.03 7-9 7c-1.913 0-3.686-.464-5.144-1.255" />
		<path d="M3 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
		<path d="M5 17c0 1.42.316 2.805 1 4" />
	</svg>
)

export default LassoOutlineIcon
