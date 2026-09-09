import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DiaboloPlusOutlineIcon = ({
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
		<path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" />
		<path d="M4 6v.143a1 1 0 0 0 .048.307L6 12l-1.964 5.67a1 1 0 0 0-.036.265V18c0 1.657 3.582 3 8 3q.255 0 .508-.006M18 12l1.952-5.55A1 1 0 0 0 20 6.143V6" />
		<path d="M6 12c0 1.105 2.686 2 6 2s6-.895 6-2m-2 7h6m-3-3v6" />
	</svg>
)

export default DiaboloPlusOutlineIcon
