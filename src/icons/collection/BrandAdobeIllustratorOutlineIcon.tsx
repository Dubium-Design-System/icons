import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandAdobeIllustratorOutlineIcon = ({
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
		<path d="M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12" />
		<path d="m12.947 15.79-.82-2.653m-4.864 2.652.82-2.652m0 0 .687-2.218c.558-1.806.838-2.708 1.335-2.708.498 0 .777.902 1.336 2.708l.686 2.218m-4.043 0h4.043m3.662 2.652v-4.736m0-2.369v-.473" />
	</svg>
)

export default BrandAdobeIllustratorOutlineIcon
