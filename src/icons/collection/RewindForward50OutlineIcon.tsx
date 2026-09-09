import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RewindForward50OutlineIcon = ({
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
		<path d="M5.007 16.478A6 6 0 0 1 9 6h11m-5 9.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0" />
		<path d="m17 9 3-3-3-3M9 20h1.5a1.5 1.5 0 0 0 0-3H9v-3h3" />
	</svg>
)

export default RewindForward50OutlineIcon
