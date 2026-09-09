import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BoxModelOffOutlineIcon = ({
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
		<path d="M12 8h4v4m0 4H8V8" />
		<path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.547.22-1.043.576-1.405M16 16l3.3 3.3M16 8l3.3-3.3M8 8 4.7 4.7M8 16l-3.3 3.3M3 3l18 18" />
	</svg>
)

export default BoxModelOffOutlineIcon
