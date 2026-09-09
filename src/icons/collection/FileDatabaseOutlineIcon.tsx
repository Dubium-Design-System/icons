import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileDatabaseOutlineIcon = ({
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
		<path d="M8 12.75a4 1.75 0 1 0 8 0 4 1.75 0 1 0-8 0" />
		<path d="M8 12.5v3.75C8 17.216 9.79 18 12 18s4-.784 4-1.75V12.5M14 3v4a1 1 0 0 0 1 1h4" />
		<path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" />
	</svg>
)

export default FileDatabaseOutlineIcon
