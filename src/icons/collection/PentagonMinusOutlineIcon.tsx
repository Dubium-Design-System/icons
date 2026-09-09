import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PentagonMinusOutlineIcon = ({
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
		<path d="M12.5 21q-1.82 0-5.458.005a1.98 1.98 0 0 1-1.881-1.367l-3.064-9.43a1.98 1.98 0 0 1 .719-2.212l8.021-5.828a1.98 1.98 0 0 1 2.326 0l8.021 5.828c.694.504.984 1.397.719 2.212L20.344 15M16 19h6" />
	</svg>
)

export default PentagonMinusOutlineIcon
