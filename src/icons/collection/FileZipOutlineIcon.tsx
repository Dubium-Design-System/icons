import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileZipOutlineIcon = ({
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
		<path d="M6 20.735A2 2 0 0 1 5 19V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-1" />
		<path d="M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2m0-12h-1m3 2h-1m-1 2h-1m3 2h-1m-1 2h-1m3 2h-1" />
	</svg>
)

export default FileZipOutlineIcon
