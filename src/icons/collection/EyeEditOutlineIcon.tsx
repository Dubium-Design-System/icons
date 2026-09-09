import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EyeEditOutlineIcon = ({
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
		<path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
		<path d="M11.192 17.966Q6.33 17.546 3 12q3.6-6 9-6 4.989 0 8.442 5.122M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" />
	</svg>
)

export default EyeEditOutlineIcon
