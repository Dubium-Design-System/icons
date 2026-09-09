import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NotificationOffOutlineIcon = ({
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
		<path d="M6.154 6.187A2 2 0 0 0 5 8v9a2 2 0 0 0 2 2h9a2 2 0 0 0 1.811-1.151M14 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 3l18 18" />
	</svg>
)

export default NotificationOffOutlineIcon
