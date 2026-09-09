import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DatabaseExclamationOutlineIcon = ({
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
		<path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
		<path d="M4 6v6c0 1.657 3.582 3 8 3 1.118 0 2.182-.086 3.148-.241M20 12V6" />
		<path d="M4 12v6c0 1.657 3.582 3 8 3 1.064 0 2.079-.078 3.007-.22M19 16v3m0 3v.01" />
	</svg>
)

export default DatabaseExclamationOutlineIcon
