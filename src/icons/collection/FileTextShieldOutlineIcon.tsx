import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileTextShieldOutlineIcon = ({
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
		<path d="M13 3v4a.997.997 0 0 0 1 1h4" />
		<path d="M11 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v3.5M8 9h1m-1 3.994h3m-3 4.003h2" />
		<path d="M21 15.994c0 4-2.5 6-3.5 6s-3.5-2-3.5-6c1 0 2.5-.5 3.5-1.5 1 1 2.5 1.5 3.5 1.5" />
	</svg>
)

export default FileTextShieldOutlineIcon
