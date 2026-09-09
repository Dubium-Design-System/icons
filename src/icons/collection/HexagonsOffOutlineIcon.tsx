import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HexagonsOffOutlineIcon = ({
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
		<path d="M4 18v-5l4-2 4 2v5l-4 2zm4-7V8m1.332-2.666L12 4l4 2v5m-4 2 .661-.331m2.684-1.341L16 11l4 2v3m-1.334 2.667L16 20l-4-2M3 3l18 18" />
	</svg>
)

export default HexagonsOffOutlineIcon
