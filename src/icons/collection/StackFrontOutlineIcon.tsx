import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const StackFrontOutlineIcon = ({
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
		<path fill={color} d="M12 4 4 8l8 4 8-4z" />
		<path d="m8 14-4 2 8 4 8-4-4-2" />
		<path d="m8 10-4 2 8 4 8-4-4-2" />
	</svg>
)

export default StackFrontOutlineIcon
