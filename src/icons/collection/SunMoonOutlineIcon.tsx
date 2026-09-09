import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SunMoonOutlineIcon = ({
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
		<path d="M9.173 14.83a4 4 0 1 1 5.657-5.657" />
		<path d="m11.294 12.707.174.247a7.5 7.5 0 0 0 8.845 2.492A9 9 0 0 1 5.642 18.36M3 12h1m8-9v1M5.6 5.6l.7.7M3 21 21 3" />
	</svg>
)

export default SunMoonOutlineIcon
