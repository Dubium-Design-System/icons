import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LuggageOffOutlineIcon = ({
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
		<path d="M10 6h6a2 2 0 0 1 2 2v6m0 4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8c0-.546.218-1.04.573-1.4M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m-9 4h4m4 0h4M6 16h10m-7 4v1m6-1v1M3 3l18 18" />
	</svg>
)

export default LuggageOffOutlineIcon
