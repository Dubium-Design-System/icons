import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BinaryOffOutlineIcon = ({
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
		<path d="M11 7V5h-1m8 14v-1M15.5 5h2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m-5 9h2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5M6 10v.01M6 19v.01M3 3l18 18" />
	</svg>
)

export default BinaryOffOutlineIcon
