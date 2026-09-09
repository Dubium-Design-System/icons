import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DiceOutlineIcon = ({
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
		<path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		<path
			fill={color}
			d="M8 8.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m7 0a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m0 7a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m-7 0a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0"
		/>
	</svg>
)

export default DiceOutlineIcon
