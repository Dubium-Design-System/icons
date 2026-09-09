import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ZodiacScorpioOutlineIcon = ({
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
		<path d="M3 4a2 2 0 0 1 2 2v9m0-9a2 2 0 0 1 4 0v9m0-9a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3-3m0 6 3-3" />
	</svg>
)

export default ZodiacScorpioOutlineIcon
