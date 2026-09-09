import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TaxPoundOutlineIcon = ({
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
		<path d="M8.487 21h7.026a4 4 0 0 0 3.808-5.224l-1.706-5.306A5 5 0 0 0 12.855 7h-1.71a5 5 0 0 0-4.76 3.47l-1.706 5.306A4 4 0 0 0 8.487 21M15 3q-1 4-3 4T9 3z" />
		<path d="M14 11h-1a2 2 0 0 0-2 2v2c0 1.105-.395 2-1.5 2H14m-4-3h3" />
	</svg>
)

export default TaxPoundOutlineIcon
