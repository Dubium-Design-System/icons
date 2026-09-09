import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BotIdOutlineIcon = ({
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
		<path d="M7 10.5C7 9.672 7.746 9 8.667 9h6.666c.92 0 1.667.672 1.667 1.5v3c0 .828-.746 1.5-1.667 1.5H8.667C7.747 15 7 14.328 7 13.5zM12 7v2m-2 3v.01m4-.01v.01M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2" />
	</svg>
)

export default BotIdOutlineIcon
