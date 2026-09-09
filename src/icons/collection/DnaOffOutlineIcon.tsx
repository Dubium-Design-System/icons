import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DnaOffOutlineIcon = ({
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
		<path d="M16 12a3.9 3.9 0 0 0-1.172-2.828A4.03 4.03 0 0 0 12 8M9.172 9.172a4 4 0 1 0 5.656 5.656" />
		<path d="M9.172 20.485a4 4 0 1 0-5.657-5.657M14.828 3.515a4 4 0 1 0 5.657 5.657M3 3l18 18" />
	</svg>
)

export default DnaOffOutlineIcon
