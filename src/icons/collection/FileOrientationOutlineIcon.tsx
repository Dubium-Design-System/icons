import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileOrientationOutlineIcon = ({
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
		<path d="M10 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v2m-6 10h5a2 2 0 0 0 2-2v-5" />
		<path d="m15 22-2-2 2-2m3-3 2-2 2 2" />
	</svg>
)

export default FileOrientationOutlineIcon
