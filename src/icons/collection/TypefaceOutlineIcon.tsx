import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TypefaceOutlineIcon = ({
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
		<path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		<path d="M17 17a2 2 0 0 1-2-2V7h-5a2 2 0 0 0-2 2" />
		<path d="M7 17a2.775 2.775 0 0 0 2.632-1.897L10 14a13.4 13.4 0 0 1 3.236-5.236L15 7m-5 7h5" />
	</svg>
)

export default TypefaceOutlineIcon
