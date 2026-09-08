import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MovieOffOutlineIcon = ({
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
		<path d="M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362.359-.859.58-1.408.58H6a2 2 0 0 1-2-2V6c0-.539.213-1.028.56-1.388M8 8v12m8-16v8m0 4v4M4 8h4m-4 8h4m-4-4h8m4 0h4m-4-4h4M3 3l18 18" />
	</svg>
)

export default MovieOffOutlineIcon
