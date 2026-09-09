import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CreditCardPayOutlineIcon = ({
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
		<path d="M12 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4.5M3 10h18m-5 9h6m-3-3 3 3-3 3M7.005 15h.005M11 15h2" />
	</svg>
)

export default CreditCardPayOutlineIcon
