import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HandFingerDownOutlineIcon = ({
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
		<path d="M8 12v8.5a1.5 1.5 0 0 0 3 0V13m0 .5v2a1.5 1.5 0 0 0 3 0V13m0 1.5a1.5 1.5 0 0 0 3 0V13" />
		<path d="M17 13.5a1.5 1.5 0 0 0 3 0V9a6 6 0 0 0-6-6h-2 .208a6 6 0 0 0-5.012 2.7L7 6q-.468.718-3.286 5.728a1.5 1.5 0 0 0 .536 2.022c.734.44 1.674.325 2.28-.28L8 12" />
	</svg>
)

export default HandFingerDownOutlineIcon
