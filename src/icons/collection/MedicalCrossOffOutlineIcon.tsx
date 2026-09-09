import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MedicalCrossOffOutlineIcon = ({
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
		<path d="m17.928 17.733-.574-.331L14 15.464V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4.536l-3.928 2.268a1 1 0 0 1-1.366-.366l-1-1.732a1 1 0 0 1 .366-1.366L7.999 12 4.072 9.732a1 1 0 0 1-.366-1.366l1-1.732a1 1 0 0 1 1.366-.366l.333.192M10 6V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.535l3.928-2.267a1 1 0 0 1 1.366.366l1 1.732a1 1 0 0 1-.366 1.366L16.001 12l3.927 2.269a1 1 0 0 1 .366 1.366l-.24.416M3 3l18 18" />
	</svg>
)

export default MedicalCrossOffOutlineIcon
