import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LetterSpacingOutlineIcon = ({
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
		<path d="M5 12V6.5a2.5 2.5 0 0 1 5 0V12m0-4H5m8-4 3 8 3-8M5 18h14m-2 2 2-2-2-2M7 16l-2 2 2 2" />
	</svg>
)

export default LetterSpacingOutlineIcon
