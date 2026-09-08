import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RotateDotOutlineIcon = ({
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
		<path d="M19.95 11a8 8 0 1 0-.5 4m.5 5v-5h-5" />
		<path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default RotateDotOutlineIcon
