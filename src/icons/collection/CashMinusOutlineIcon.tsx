import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CashMinusOutlineIcon = ({
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
		<path d="M7 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
		<path d="M12 19H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5" />
		<path d="M12 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0m4 5h6" />
	</svg>
)

export default CashMinusOutlineIcon
