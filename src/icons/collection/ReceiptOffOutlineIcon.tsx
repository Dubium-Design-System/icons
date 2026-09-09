import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ReceiptOffOutlineIcon = ({
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
		<path d="M5 21V5m2-2h10a2 2 0 0 1 2 2v10m0 4.01V21l-3-2-2 2-2-2-2 2-2-2-3 2m6-14h4m-6 4h2m2 4h2m0-4v.01M3 3l18 18" />
	</svg>
)

export default ReceiptOffOutlineIcon
