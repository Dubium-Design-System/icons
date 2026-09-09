import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MosqueOutlineIcon = ({
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
		<path d="M13.5 5.49A1.764 1.764 0 0 1 11 3m1 3v3m7 12a8.9 8.9 0 0 0 1-3.67c0-2-.92-3.25-3.24-4.51A17.4 17.4 0 0 1 12 9a17.4 17.4 0 0 1-4.76 3.82C4.92 14.08 4 15.37 4 17.33A8.9 8.9 0 0 0 5 21z" />
	</svg>
)

export default MosqueOutlineIcon
