import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PhotoSensor2OutlineIcon = ({
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
		<path d="M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2M7 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m1 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
	</svg>
)

export default PhotoSensor2OutlineIcon
