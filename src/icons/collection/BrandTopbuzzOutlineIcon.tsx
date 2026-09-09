import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandTopbuzzOutlineIcon = ({
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
		<path d="M4.417 8.655a.524.524 0 0 1-.405-.622l.986-4.617a.524.524 0 0 1 .626-.404l14.958 3.162c.285.06.467.339.406.622l-.987 4.618a.524.524 0 0 1-.625.404l-4.345-.92q-.296-.061-.353.197l-2.028 9.49a.527.527 0 0 1-.625.404l-4.642-.982a.527.527 0 0 1-.406-.622l2.028-9.493q.056-.255-.204-.31z" />
	</svg>
)

export default BrandTopbuzzOutlineIcon
