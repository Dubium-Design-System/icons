import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileTypeSqlOutlineIcon = ({
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
		<path d="M14 3v4a1 1 0 0 0 1 1h4" />
		<path d="M14 3v4a1 1 0 0 0 1 1h4M5 20.25c0 .414.336.75.75.75H7a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75" />
		<path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4m-1 3v6h2m-7-6a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2m1 5 1.5 1.5" />
	</svg>
)

export default FileTypeSqlOutlineIcon
