import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LeafMapleOutlineIcon = ({
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
		<path d="M5 21c.5-4.5 2.5-8 7-10" />
		<path d="M13 19c-2.733 0-4.16-3.11-5-5-1.892-.84-4-1.826-4-4.556C5.014 8.8 6.816 8.795 8 9c-.312-2.071-.37-4.414 1-6 2.364.369 3 4 3 4 1.463-1.368 4-2 6-2 0 2-.63 4.538-2 6q3.687.996 4 3c-1.586 1.36-3.933 1.311-6 1q.19 1.098-1 4" />
	</svg>
)

export default LeafMapleOutlineIcon
