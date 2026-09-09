import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const IconsOffOutlineIcon = ({
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
		<path d="M4.01 4.041A3.5 3.5 0 0 0 6.5 10c.975 0 1.865-.357 2.5-1m.958-3.044a3.5 3.5 0 0 0-2.905-2.912M2.5 21h8l-4-7zM14 3l7 7m-7 0 7-7m-3 11h3v3m0 4h-7v-7M3 3l18 18" />
	</svg>
)

export default IconsOffOutlineIcon
