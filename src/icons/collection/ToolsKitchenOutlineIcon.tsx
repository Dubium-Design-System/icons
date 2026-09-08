import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ToolsKitchenOutlineIcon = ({
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
		<path d="M4 3h8l-1 9H5zm3 15h2v3H7zM20 3v12h-5c-.023-3.681.184-7.406 5-12m0 12v6h-1v-3M8 12v6" />
	</svg>
)

export default ToolsKitchenOutlineIcon
