import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandZapierOutlineIcon = ({
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
		<path d="M3 12h6m12 0h-6m-3-9v6m0 6v6M5.636 5.636l4.243 4.243m8.485 8.485-4.243-4.243m4.243-8.485-4.243 4.243m-4.242 4.242-4.243 4.243" />
	</svg>
)

export default BrandZapierOutlineIcon
