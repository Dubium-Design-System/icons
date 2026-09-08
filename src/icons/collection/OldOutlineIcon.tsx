import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const OldOutlineIcon = ({
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
		<path d="m11 21-1-4-2-3V8" />
		<path d="m5 14-1-3 4-3 3 2 3 .5M7 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 13-2 4m11 0v-8.5a1.5 1.5 0 0 1 3 0v.5" />
	</svg>
)

export default OldOutlineIcon
