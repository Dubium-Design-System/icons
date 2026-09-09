import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ReceiptPoundOutlineIcon = ({
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
		<path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2z" />
		<path d="M15 9a2 2 0 1 0-4 0v4a2 2 0 0 1-2 2h6m-6-3h4" />
	</svg>
)

export default ReceiptPoundOutlineIcon
