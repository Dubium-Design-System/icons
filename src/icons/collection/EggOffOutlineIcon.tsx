import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EggOffOutlineIcon = ({
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
		<path d="M17.927 17.934C16.716 19.792 14.576 20.887 12 21c-4.2 0-7-2.763-7-6.917 0-2.568.753-5.14 1.91-7.158m1.732-2.297C9.676 3.608 10.838 2.998 12 3c3.5.007 7 5.545 7 11.083q0 .447-.045.868M3 3l18 18" />
	</svg>
)

export default EggOffOutlineIcon
