import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlayHandballOutlineIcon = ({
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
		<path d="m13 21 3.5-2-4.5-4 2-4.5" />
		<path d="m5 7 4 3 5 .5 4 2.5 2.5 3M4 20l5-1 1.5-2m2.507-9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-7-4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0" />
	</svg>
)

export default PlayHandballOutlineIcon
