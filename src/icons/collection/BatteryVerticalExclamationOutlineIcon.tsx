import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BatteryVerticalExclamationOutlineIcon = ({
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
		<path d="M17 12V7a2 2 0 0 0-2-2h-.5c-.276 0-.5-.224-.5-.5s-.224-.5-.5-.5h-3c-.276 0-.5.224-.5.5s-.224.5-.5.5H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6m4-4v3m0 3v.01" />
	</svg>
)

export default BatteryVerticalExclamationOutlineIcon
