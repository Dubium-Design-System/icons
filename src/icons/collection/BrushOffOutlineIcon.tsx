import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrushOffOutlineIcon = ({
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
		<path d="M3 17a4 4 0 1 1 4 4H3z" />
		<path d="M21 3a16 16 0 0 0-9.309 4.704M9.896 9.916A16 16 0 0 0 8.2 13.2M21 3a16 16 0 0 1-4.697 9.302m-2.195 1.786A16 16 0 0 1 10.8 15.8M3 3l18 18" />
	</svg>
)

export default BrushOffOutlineIcon
