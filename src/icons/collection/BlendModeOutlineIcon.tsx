import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BlendModeOutlineIcon = ({
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
		<path d="M8 9.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0-13 0" />
		<path d="M3 14.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0-13 0" />
	</svg>
)

export default BlendModeOutlineIcon
