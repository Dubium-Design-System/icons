import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const InboxOffOutlineIcon = ({
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
		<path d="M8 4h10a2 2 0 0 1 2 2v10m-.593 3.422A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.554.225-1.056.59-1.418" />
		<path d="M4 13h3l3 3h4l.987-.987M17 13h3M3 3l18 18" />
	</svg>
)

export default InboxOffOutlineIcon
