import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FirstAidKitOffOutlineIcon = ({
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
		<path d="M8.595 4.577A2 2 0 0 1 10 4h4a2 2 0 0 1 2 2v2m-4 0h6a2 2 0 0 1 2 2v6m-.576 3.405A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2m2 6h4m-2-2v4M3 3l18 18" />
	</svg>
)

export default FirstAidKitOffOutlineIcon
