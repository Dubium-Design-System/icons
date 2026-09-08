import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SquareRotatedOffOutlineIcon = ({
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
		<path d="m16.964 16.952-3.462 3.461c-.782.783-2.222.783-3 0l-6.911-6.91c-.783-.783-.783-2.223 0-3l3.455-3.456m2-2 1.453-1.452c.782-.783 2.222-.783 3 0l6.911 6.91c.783.783.783 2.223 0 3l-1.448 1.45M3 3l18 18" />
	</svg>
)

export default SquareRotatedOffOutlineIcon
