import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RecycleOutlineIcon = ({
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
		<path d="m12 17-2 2 2 2" />
		<path d="M10 19h9a2 2 0 0 0 1.75-2.75l-.55-1M8.536 11l-.732-2.732L5.072 9" />
		<path d="m7.804 8.268-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141.024M15.464 11l2.732.732L18.928 9" />
		<path d="m18.196 11.732-4.5-7.794a2 2 0 0 0-3.256-.14l-.591.976" />
	</svg>
)

export default RecycleOutlineIcon
