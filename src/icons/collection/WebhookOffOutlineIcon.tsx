import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WebhookOffOutlineIcon = ({
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
		<path d="M4.876 13.61A4 4 0 1 0 11 17h6m-1.934 3.502a4 4 0 0 0 4.763-.675M21 17a4 4 0 0 0-4-4" />
		<path d="M16 8a4 4 0 0 0-6.824-2.833M8 8c0 1.506.77 2.818 2 3.5L7 17M3 3l18 18" />
	</svg>
)

export default WebhookOffOutlineIcon
