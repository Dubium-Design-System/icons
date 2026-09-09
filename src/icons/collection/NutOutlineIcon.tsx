import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NutOutlineIcon = ({
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
		<path d="M19 6.84a2.01 2.01 0 0 1 1 1.754v6.555c0 .728-.394 1.4-1.03 1.753l-6 3.844a2 2 0 0 1-1.94 0l-6-3.844A2 2 0 0 1 4 15.15V8.593c0-.728.394-1.399 1.03-1.753l6-3.582a2.05 2.05 0 0 1 2 0l6 3.582z" />
		<path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
	</svg>
)

export default NutOutlineIcon
