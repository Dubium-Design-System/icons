import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TipJarPoundOutlineIcon = ({
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
		<path d="M17 4v1.882c0 .685.387 1.312 1 1.618s1 .933 1 1.618V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9.118c0-.685.387-1.312 1-1.618s1-.933 1-1.618V4M6 4h12z" />
		<path d="M14 10h-1a2 2 0 0 0-2 2v2c0 1.105-.395 2-1.5 2H14m-4-3h3" />
	</svg>
)

export default TipJarPoundOutlineIcon
