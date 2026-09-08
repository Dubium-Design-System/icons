import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const OlympicsOutlineIcon = ({
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
		<path d="M3 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0m12 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
		<path d="M6 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0m6 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
	</svg>
)

export default OlympicsOutlineIcon
