import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Math1Divide2OutlineIcon = ({
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
		<path d="M5 12h14m-9 3h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3M10 5l2-2v6" />
	</svg>
)

export default Math1Divide2OutlineIcon
