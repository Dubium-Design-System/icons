import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandHeadlessuiOutlineIcon = ({
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
		<path d="m6.744 4.325 7.82-1.267a4.456 4.456 0 0 1 5.111 3.686l1.267 7.82a4.456 4.456 0 0 1-3.686 5.111l-7.82 1.267a4.456 4.456 0 0 1-5.111-3.686l-1.267-7.82a4.456 4.456 0 0 1 3.686-5.111" />
		<path d="m7.252 7.704 7.897-1.28a1 1 0 0 1 1.147.828l.36 2.223-9.562 3.51-.67-4.134a1 1 0 0 1 .828-1.147" />
	</svg>
)

export default BrandHeadlessuiOutlineIcon
