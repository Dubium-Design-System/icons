import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PodiumOffOutlineIcon = ({
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
		<path d="M12 8h7l-.621 2.485A2 2 0 0 1 16.439 12H16m-4 0H7.561a2 2 0 0 1-1.94-1.515L5 8h3M7 8V7m.864-3.106A3 3 0 0 1 10 3m-2 9 1 9m6.599-5.387L15 21m-8 0h10M3 3l18 18" />
	</svg>
)

export default PodiumOffOutlineIcon
