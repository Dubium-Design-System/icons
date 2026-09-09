import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BarrierBlockOutlineIcon = ({
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
		<path d="M4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm3 8v4m.5-4 9-9m-3 9L20 9.5m-16 4L10.5 7m6.5 9v4M5 20h4m6 0h4M17 7V5M7 7V5" />
	</svg>
)

export default BarrierBlockOutlineIcon
