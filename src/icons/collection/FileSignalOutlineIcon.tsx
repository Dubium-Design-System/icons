import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileSignalOutlineIcon = ({
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
		<path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2m-5-7v.01" />
		<path d="M9.525 11.525a3.5 3.5 0 0 0 0 4.95m4.95 0a3.5 3.5 0 0 0 0-4.95" />
	</svg>
)

export default FileSignalOutlineIcon
