import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WifiOffOutlineIcon = ({
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
		<path d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a7.96 7.96 0 0 1 3.864-2.14m4.163.155a8 8 0 0 1 3.287 2M3.515 9.515A12 12 0 0 1 7.059 7.06m3.101-.92a12 12 0 0 1 10.325 3.374M3 3l18 18" />
	</svg>
)

export default WifiOffOutlineIcon
