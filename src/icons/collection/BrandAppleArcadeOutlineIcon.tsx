import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandAppleArcadeOutlineIcon = ({
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
		<path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10 7.5v4.75a.7.7 0 0 1-.055.325.7.7 0 0 1-.348.366l-5.462 2.58a5 5 0 0 1-4.27 0l-5.462-2.58a.705.705 0 0 1-.401-.691V12.5" />
		<path d="m4.431 12.216 5.634-2.332a5.07 5.07 0 0 1 3.87 0l5.634 2.332a.692.692 0 0 1 .028 1.269l-5.462 2.543a5.06 5.06 0 0 1-4.27 0l-5.462-2.543a.691.691 0 0 1 .028-1.27M12 7v6" />
	</svg>
)

export default BrandAppleArcadeOutlineIcon
