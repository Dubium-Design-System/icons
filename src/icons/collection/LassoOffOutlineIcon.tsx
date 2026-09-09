import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LassoOffOutlineIcon = ({
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
		<path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-1.804.878-3.449 2.319-4.69m2.49-1.506A11.1 11.1 0 0 1 12 3c4.97 0 9 3.134 9 7 0 1.799-.873 3.44-2.307 4.68m-2.503 1.517A11.1 11.1 0 0 1 12 17c-1.913 0-3.686-.464-5.144-1.255" />
		<path d="M3 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
		<path d="M5 17c0 1.42.316 2.805 1 4M3 3l18 18" />
	</svg>
)

export default LassoOffOutlineIcon
