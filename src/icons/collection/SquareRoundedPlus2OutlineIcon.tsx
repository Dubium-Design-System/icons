import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SquareRoundedPlus2OutlineIcon = ({
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
		<path d="M12.54 20.996q-.264.005-.54.004c-7.2 0-9-1.8-9-9s1.8-9 9-9 9 1.8 9 9q0 .277-.004.544M16 19h6m-3-3v6" />
	</svg>
)

export default SquareRoundedPlus2OutlineIcon
