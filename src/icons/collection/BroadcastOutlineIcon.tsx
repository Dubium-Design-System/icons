import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BroadcastOutlineIcon = ({
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
		<path d="M18.364 19.364a9 9 0 1 0-12.728 0" />
		<path d="M15.536 16.536a5 5 0 1 0-7.072 0" />
		<path d="M11 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default BroadcastOutlineIcon
