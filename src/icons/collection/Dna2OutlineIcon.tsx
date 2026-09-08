import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Dna2OutlineIcon = ({
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
		<path d="M17 3v1q-.015 5.028-5.008 8.014c-3.328 1.99 3.336-2 .008-.014-3.328 1.99-5 4.662-5.008 8.014v1" />
		<path d="M17 21.014v-1q-.015-5.028-5.008-8.014c-3.328-1.99 3.336 2 .008.014C8.672 10.023 7 7.352 6.992 4V3M7 4h10M7 20h10M8 8h8m-8 8h8" />
	</svg>
)

export default Dna2OutlineIcon
