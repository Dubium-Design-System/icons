import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapPinExclamationOutlineIcon = ({
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
		<path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
		<path d="m15.005 19.31-1.591 1.59a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 13.592-4.638M19 16v3m0 3v.01" />
	</svg>
)

export default MapPinExclamationOutlineIcon
