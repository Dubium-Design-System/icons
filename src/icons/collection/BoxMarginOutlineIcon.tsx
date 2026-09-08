import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BoxMarginOutlineIcon = ({
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
		<path d="M8 8h8v8H8zM4 4v.01M8 4v.01M12 4v.01M16 4v.01M20 4v.01M4 20v.01M8 20v.01m4-.01v.01m4-.01v.01m4-.01v.01M20 16v.01M20 12v.01M20 8v.01M4 16v.01M4 12v.01M4 8v.01" />
	</svg>
)

export default BoxMarginOutlineIcon
