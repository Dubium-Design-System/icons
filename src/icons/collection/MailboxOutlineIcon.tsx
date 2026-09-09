import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MailboxOutlineIcon = ({
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
		<path d="M10 21v-6.5a3.5 3.5 0 0 0-7 0V21h18v-6a4 4 0 0 0-4-4H6.5" />
		<path d="M12 11V3h4l2 2-2 2h-4m-6 8h1" />
	</svg>
)

export default MailboxOutlineIcon
