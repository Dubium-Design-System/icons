import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencySomOutlineIcon = ({
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
		<path d="M10 18V6H5v10a2 2 0 0 1-2 2M14 6v12h4a3 3 0 0 0 0-6h-4 4a3 3 0 0 0 0-6z" />
	</svg>
)

export default CurrencySomOutlineIcon
