import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AlertTriangleOffOutlineIcon = ({
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
		<path d="M21.998 17.997a1.9 1.9 0 0 0-.255-.872L13.637 3.591a1.914 1.914 0 0 0-3.274 0l-1.04 1.736M7.83 7.82l-5.573 9.304a1.914 1.914 0 0 0 1.636 2.871H20M12 16h.01M3 3l18 18M12 7v1" />
	</svg>
)

export default AlertTriangleOffOutlineIcon
