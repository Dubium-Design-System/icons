import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldWwwOutlineIcon = ({
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
		<path d="M19.5 7A9 9 0 0 0 12 3a8.99 8.99 0 0 0-7.484 4" />
		<path d="M11.5 3a17 17 0 0 0-1.826 4M12.5 3a17 17 0 0 1 1.828 4M19.5 17a9 9 0 0 1-7.5 4 8.99 8.99 0 0 1-7.484-4" />
		<path d="M11.5 21a17 17 0 0 1-1.826-4m2.826 4a17 17 0 0 0 1.828-4M2 10l1 4 1.5-4L6 14l1-4m10 0 1 4 1.5-4 1.5 4 1-4M9.5 10l1 4 1.5-4 1.5 4 1-4" />
	</svg>
)

export default WorldWwwOutlineIcon
