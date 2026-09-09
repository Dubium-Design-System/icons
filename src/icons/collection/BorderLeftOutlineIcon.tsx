import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BorderLeftOutlineIcon = ({
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
		<path d="M4 20V4m4 0v.01M12 4v.01M16 4v.01M20 4v.01M12 8v.01M20 8v.01M8 12v.01m4-.01v.01m4-.01v.01m4-.01v.01M12 16v.01m8-.01v.01M8 20v.01m4-.01v.01m4-.01v.01m4-.01v.01" />
	</svg>
)

export default BorderLeftOutlineIcon
