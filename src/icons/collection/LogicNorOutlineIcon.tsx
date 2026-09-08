import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LogicNorOutlineIcon = ({
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
		<path d="M22 12h-4M2 9h5m-5 6h5M6 5c10.667 2.1 10.667 12.6 0 14q2.709-7 0-14" />
		<path d="M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
	</svg>
)

export default LogicNorOutlineIcon
