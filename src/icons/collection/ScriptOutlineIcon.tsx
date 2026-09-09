import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ScriptOutlineIcon = ({
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
		<path d="M17 20H6a3 3 0 0 1 0-6h11a3 3 0 0 0 0 6h1a3 3 0 0 0 3-3V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8" />
	</svg>
)

export default ScriptOutlineIcon
