import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EarOffOutlineIcon = ({
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
		<path d="M6 10c0-1.146.277-2.245.78-3.219m1.792-2.208A7 7 0 0 1 19 13.6a10 10 0 0 1-.633.762m-2.045 1.96A8 8 0 0 0 15 18.6 4.5 4.5 0 0 1 8.2 20" />
		<path d="M11.42 7.414a3 3 0 0 1 4.131 4.13M3 3l18 18" />
	</svg>
)

export default EarOffOutlineIcon
