import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const InvoiceOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M14 3v4a1 1 0 0 0 1 1h4" />
		<path d="M19 12v7a1.78 1.78 0 0 1-3.1 1.4 1.65 1.65 0 0 0-2.6 0 1.65 1.65 0 0 1-2.6 0 1.65 1.65 0 0 0-2.6 0A1.78 1.78 0 0 1 5 19V5a2 2 0 0 1 2-2h7l5 5v4.25" />
	</svg>
)

export default InvoiceOutlineIcon
