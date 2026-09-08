import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileTextAiOutlineIcon = ({
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
		<path d="M10 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v3.5M9 9h1m-1 4h2.5M9 17h1" />
		<path d="M14 21v-4a2 2 0 1 1 4 0v4m-4-2h4m3-4v6" />
	</svg>
)

export default FileTextAiOutlineIcon
