import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BandageOffOutlineIcon = ({
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
		<path d="M10 12v.01M12 14v.01m-1.487-7.523L12.5 4.5a4.95 4.95 0 0 1 7 7l-2.018 2.018M15.5 15.5l-4 4a4.95 4.95 0 0 1-7-7l4-4M3 3l18 18" />
	</svg>
)

export default BandageOffOutlineIcon
