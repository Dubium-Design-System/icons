import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ConeOffOutlineIcon = ({
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
		<path d="M20.396 16.384 12.87 2.507a1 1 0 0 0-1.74 0L9.504 5.505M8.097 8.099 3 17.497v.5C3 19.657 7.03 21 12 21c3.202 0 6.014-.558 7.609-1.398M3 3l18 18" />
	</svg>
)

export default ConeOffOutlineIcon
