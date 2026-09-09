import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileTypePptOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M14 3v4a1 1 0 0 0 1 1h4" />
		<path d="M14 3v4a1 1 0 0 0 1 1h4M5 18h1.5a1.5 1.5 0 0 0 0-3H5v6m6-3h1.5a1.5 1.5 0 0 0 0-3H11v6m5.5-6h3M18 15v6" />
		<path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4" />
	</svg>
)

export default FileTypePptOutlineIcon
