import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BorderTopPlusOutlineIcon = ({
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
		<path d="M4 4h16M4 8v.01M20 8v.01M4 12v.01M20 12v.01M4 16v.01M15 12H9m3-3v6m8 1v.01M4 20v.01M8 20v.01m4-.01v.01m4-.01v.01m4-.01v.01" />
	</svg>
)

export default BorderTopPlusOutlineIcon
