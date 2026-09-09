import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DatabaseSearchOutlineIcon = ({
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
		<path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
		<path d="M4 6v6c0 1.657 3.582 3 8 3m8-3.5V6" />
		<path d="M4 12v6c0 1.657 3.582 3 8 3m3-3a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22" />
	</svg>
)

export default DatabaseSearchOutlineIcon
