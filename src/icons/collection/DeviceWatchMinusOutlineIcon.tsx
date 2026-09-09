import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceWatchMinusOutlineIcon = ({
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
		<path d="M12 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6m-9 3v3h3.5M9 6V3h6v3m1 13h6" />
	</svg>
)

export default DeviceWatchMinusOutlineIcon
