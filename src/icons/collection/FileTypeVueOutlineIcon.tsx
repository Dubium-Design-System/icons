import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileTypeVueOutlineIcon = ({
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
		<path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4 15l2 6 2-6m3 0v4.5a1.5 1.5 0 0 0 3 0V15m6 0h-3v6h3m-3-3h2" />
	</svg>
)

export default FileTypeVueOutlineIcon
