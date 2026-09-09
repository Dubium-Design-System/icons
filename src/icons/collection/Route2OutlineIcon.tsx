import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Route2OutlineIcon = ({
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
		<path d="M3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-5-2a2 2 0 0 0-2 2v10a2 2 0 0 1-2 2" />
	</svg>
)

export default Route2OutlineIcon
