import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ZoomReplaceOutlineIcon = ({
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
		<path d="m21 21-6-6M3.291 8a7 7 0 0 1 5.077-4.806 7.02 7.02 0 0 1 8.242 4.403" />
		<path d="M17 4v4h-4m3.705 4a7 7 0 0 1-5.074 4.798 7.02 7.02 0 0 1-8.241-4.403" />
		<path d="M3 16v-4h4" />
	</svg>
)

export default ZoomReplaceOutlineIcon
