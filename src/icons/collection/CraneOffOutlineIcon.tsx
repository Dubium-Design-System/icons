import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CraneOffOutlineIcon = ({
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
		<path d="M6 21h6m-3 0V9m0-4V3L8 4M6 6 3 9h6m4 0h8M9 3l10 6m-2 0v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1-2-2M3 3l18 18" />
	</svg>
)

export default CraneOffOutlineIcon
