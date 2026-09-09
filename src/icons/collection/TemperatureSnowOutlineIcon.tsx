import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TemperatureSnowOutlineIcon = ({
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
		<path d="M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4m6.75-5 1 2H18" />
		<path d="m17 4-3 5 2 3m4.25-2L19 12l1.25 2" />
		<path d="M22 12h-6l-2 3m4 3h-2.25l-1 2" />
		<path d="m17 20-3-5h-1m-1-6 2.088.008" />
	</svg>
)

export default TemperatureSnowOutlineIcon
