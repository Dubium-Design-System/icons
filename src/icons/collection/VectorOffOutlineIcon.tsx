import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const VectorOffOutlineIcon = ({
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
		<path d="M6.68 6.733A1 1 0 0 1 6 7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 .293-.708M17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3.72 16.693A1 1 0 0 1 20 21h-2a1 1 0 0 1-1-1v-2c0-.282.116-.536.304-.718M3 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM5 7v10M19 7v8M9 5h8M7 19h10M3 3l18 18" />
	</svg>
)

export default VectorOffOutlineIcon
