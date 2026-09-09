import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const VinylOutlineIcon = ({
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
		<path d="M16 3.937A9 9 0 1 0 21 12" />
		<path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
		<path d="m20 4-3.5 10-2.5 2" />
	</svg>
)

export default VinylOutlineIcon
