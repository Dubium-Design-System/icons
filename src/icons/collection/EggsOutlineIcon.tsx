import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EggsOutlineIcon = ({
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
		<path d="M13 22c-3 0-4.868-2.118-5-5 0-3 2-5 5-5 4 0 8.01 2.5 8 5 0 2.5-4 5-8 5" />
		<path d="M8 18c-3.03-.196-5-2.309-5-5.38C3 8.313 5.75 3.995 8.5 4c2.614 0 5.248 3.915 5.5 8" />
	</svg>
)

export default EggsOutlineIcon
