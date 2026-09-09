import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ScanCubeOutlineIcon = ({
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
		<path d="m8.504 9.426 3-1.714a1 1 0 0 1 .992 0l3 1.714a1 1 0 0 1 .504.868v3.411a1 1 0 0 1-.504.868l-3 1.715a1 1 0 0 1-.992 0l-3-1.715A1 1 0 0 1 8 13.705v-3.41a1 1 0 0 1 .504-.869m7.246.538L12 12m0 0L8.25 9.964M12 12v4.071M3 7V5a2 2 0 0 1 2-2h2M3 17v2a2 2 0 0 0 2 2h2M17 3h2a2 2 0 0 1 2 2v2m-4 14h2a2 2 0 0 0 2-2v-2" />
	</svg>
)

export default ScanCubeOutlineIcon
