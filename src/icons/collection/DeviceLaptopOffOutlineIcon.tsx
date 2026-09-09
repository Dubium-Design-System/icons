import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceLaptopOffOutlineIcon = ({
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
		<path d="M3 19h16M10 6h8a1 1 0 0 1 1 1v8m-3 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1M3 3l18 18" />
	</svg>
)

export default DeviceLaptopOffOutlineIcon
