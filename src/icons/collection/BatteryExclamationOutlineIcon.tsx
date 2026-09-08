import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BatteryExclamationOutlineIcon = ({
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
		<path d="M9 17h8a2 2 0 0 0 2-2v-.5c0-.276.224-.5.5-.5s.5-.224.5-.5v-3c0-.276-.224-.5-.5-.5s-.5-.224-.5-.5V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3m1 4v3m0 3v.01" />
	</svg>
)

export default BatteryExclamationOutlineIcon
