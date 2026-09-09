import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FishOffOutlineIcon = ({
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
		<path d="M16.69 7.44a6.97 6.97 0 0 0-1.63 3.635" />
		<path d="M2 9.504c5.307 5.948 10.293 8.57 14.597 7.1m2.583-1.449c.988-.788 1.93-1.836 2.82-3.153-3-4.443-6.596-5.812-10.564-4.548M8.672 8.72C6.527 9.986 4.294 11.935 2 14.506M18 11v.01m-6.847.159q-.43 1.166.347 2.331M3 3l18 18" />
	</svg>
)

export default FishOffOutlineIcon
