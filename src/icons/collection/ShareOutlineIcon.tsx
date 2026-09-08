import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShareOutlineIcon = ({
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
		<path d="M3 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m12-6a3 3 0 1 0 6 0 3 3 0 1 0-6 0m0 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-6.3-7.3 6.6-3.4m-6.6 6 6.6 3.4" />
	</svg>
)

export default ShareOutlineIcon
