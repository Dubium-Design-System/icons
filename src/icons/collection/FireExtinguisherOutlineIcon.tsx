import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FireExtinguisherOutlineIcon = ({
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
		<path d="M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-9a4 4 0 0 1 4-4m-3 9h6m-3-9V4m4 1-4-1 4-1m-4 1H9a3 3 0 0 0-3 3" />
	</svg>
)

export default FireExtinguisherOutlineIcon
