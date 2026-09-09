import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoneybagEditOutlineIcon = ({
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
		<path d="M9.5 3h5A1.5 1.5 0 0 1 16 4.5 3.5 3.5 0 0 1 12.5 8h-1A3.5 3.5 0 0 1 8 4.5 1.5 1.5 0 0 1 9.5 3" />
		<path d="M11 21H8a4 4 0 0 1-4-4v-1a8 8 0 0 1 14.376-4.833m.044 4.443a2.1 2.1 0 1 1 2.97 2.97L18 22h-3v-3z" />
	</svg>
)

export default MoneybagEditOutlineIcon
