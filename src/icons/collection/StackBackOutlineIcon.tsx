import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const StackBackOutlineIcon = ({
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
		<path d="m4 8 8 4 8-4-8-4z" />
		<path fill={color} d="m12 16-4-2-4 2 8 4 8-4-4-2z" />
		<path d="m8 10-4 2 4 2m8 0 4-2-4-2" />
	</svg>
)

export default StackBackOutlineIcon
