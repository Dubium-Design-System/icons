import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoneybagPlusOutlineIcon = ({
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
		<path d="M9.5 3h5A1.5 1.5 0 0 1 16 4.5 3.5 3.5 0 0 1 12.5 8h-1A3.5 3.5 0 0 1 8 4.5 1.5 1.5 0 0 1 9.5 3" />
		<path d="M12.5 21H8a4 4 0 0 1-4-4v-1a8 8 0 0 1 14.935-3.991M16 19h6m-3-3v6" />
	</svg>
)

export default MoneybagPlusOutlineIcon
