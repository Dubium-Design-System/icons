import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EditCircleOutlineIcon = ({
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
		<path d="m12 15 8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3zm4-10 3 3" />
		<path d="M9 7.07A7 7 0 0 0 10 21a7 7 0 0 0 6.929-6" />
	</svg>
)

export default EditCircleOutlineIcon
