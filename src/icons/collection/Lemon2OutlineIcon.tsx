import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Lemon2OutlineIcon = ({
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
		<path d="M18 4a2 2 0 0 1 1.185 3.611c1.55 2.94.873 6.917-1.892 9.682s-6.743 3.442-9.682 1.892a2 2 0 1 1-2.796-2.796c-1.55-2.94-.873-6.917 1.892-9.682s6.743-3.442 9.682-1.892A2 2 0 0 1 18 4" />
	</svg>
)

export default Lemon2OutlineIcon
