import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PageBreakOutlineIcon = ({
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
		<path d="M14 3v4a1 1 0 0 0 1 1h4m0 10v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1m-2-4h3m4.5 0h3m4.5 0h3" />
		<path d="M5 10V5a2 2 0 0 1 2-2h7l5 5v2" />
	</svg>
)

export default PageBreakOutlineIcon
