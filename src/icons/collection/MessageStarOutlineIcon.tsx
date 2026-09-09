import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MessageStarOutlineIcon = ({
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
		<path d="M8 9h8m-8 4h4.5m-2.175 6.605L8 21v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4.5" />
		<path d="m17.8 20.817-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411z" />
	</svg>
)

export default MessageStarOutlineIcon
