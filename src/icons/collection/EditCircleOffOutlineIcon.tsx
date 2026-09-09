import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EditCircleOffOutlineIcon = ({
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
		<path d="M10.507 10.498 9 12v3h3l1.493-1.498m2-2.01 4.89-4.907a2.1 2.1 0 0 0-2.97-2.97L12.5 8.511M16 5l3 3" />
		<path d="M7.476 7.471A7 7 0 0 0 10 21a7 7 0 0 0 6.53-4.474M3 3l18 18" />
	</svg>
)

export default EditCircleOffOutlineIcon
