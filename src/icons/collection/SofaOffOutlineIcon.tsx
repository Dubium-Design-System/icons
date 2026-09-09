import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SofaOffOutlineIcon = ({
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
		<path d="M18 14v-1a2 2 0 1 1 4 0v5m-3 1H3a1 1 0 0 1-1-1v-5a2 2 0 1 1 4 0v1h8" />
		<path d="M4 11V8c0-1.082.573-2.03 1.432-2.558M9 5h8a3 3 0 0 1 3 3v3m-8-6v3m0 4v2M3 3l18 18" />
	</svg>
)

export default SofaOffOutlineIcon
