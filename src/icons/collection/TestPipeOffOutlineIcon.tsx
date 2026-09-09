import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TestPipeOffOutlineIcon = ({
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
		<path d="M20 8.04A804 804 0 0 0 16 12m-2 2q-1.627 1.628-6.122 6.164a2.857 2.857 0 0 1-4.041-4.04C6.855 13.124 8.91 11.087 10 10m2-2q1.307-1.308 3.959-4M7 13h6m6 2 1.5 1.6m-.74 3.173a2 2 0 0 1-2.612-2.608M15 3l6 6M3 3l18 18" />
	</svg>
)

export default TestPipeOffOutlineIcon
