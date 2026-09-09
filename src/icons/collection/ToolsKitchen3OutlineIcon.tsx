import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ToolsKitchen3OutlineIcon = ({
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
		<path d="M7 4v17M4 4v3a3 3 0 1 0 6 0V4m4 4a3 4 0 1 0 6 0 3 4 0 1 0-6 0m3 4v9" />
	</svg>
)

export default ToolsKitchen3OutlineIcon
