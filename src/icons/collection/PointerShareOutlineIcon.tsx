import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PointerShareOutlineIcon = ({
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
		<path d="m15.646 13.09-.868-.868 3.113-2.09a1.2 1.2 0 0 0-.309-2.228L4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093.607.607M16 22l5-5m0 4.5V17h-4.5" />
	</svg>
)

export default PointerShareOutlineIcon
