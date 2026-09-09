import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Vip2OutlineIcon = ({
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
		<path d="M3 5h4m10 0h4M3 19h18M4 9l2 6h1l2-6m3 1v5m4 0V9h2a2 2 0 1 1 0 4h-2m-6-8a2 2 0 0 1 2 2 2 2 0 0 1 2-2 2 2 0 0 1-2-2 2 2 0 0 1-2 2" />
	</svg>
)

export default Vip2OutlineIcon
