import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GalaxyOutlineIcon = ({
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
		<path d="M12 3q-2 1.5-2 4.5c0 3 2 4.5 2 4.5s2 1.5 2 4.5q0 3-2 4.5" />
		<path d="M19.794 16.5q-.3-2.482-2.897-3.982C14.3 11.018 12 12 12 12s-2.299.982-4.897-.518Q4.505 9.982 4.206 7.5" />
		<path d="M19.794 7.5q-2.299-.982-4.897.518C12.3 9.518 12 12 12 12s-.299 2.482-2.897 3.982q-2.598 1.5-4.897.518" />
	</svg>
)

export default GalaxyOutlineIcon
