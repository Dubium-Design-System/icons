import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BorderBottomPlusOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M4 20h16M4 16v-.01M20 16v-.01M4 12v-.01M20 12v-.01M4 8v-.01M20 8v-.01M4 4v-.01M8 4v-.01M12 4v-.01M16 4v-.01M20 4v-.01M15 12H9m3-3v6" />
	</svg>
)

export default BorderBottomPlusOutlineIcon
