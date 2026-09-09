import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LockSearchOutlineIcon = ({
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
		<path d="M11.5 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10m-9 0V7a4 4 0 1 1 8 0v4m-1 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22" />
	</svg>
)

export default LockSearchOutlineIcon
