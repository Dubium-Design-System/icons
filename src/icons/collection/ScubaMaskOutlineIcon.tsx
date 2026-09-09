import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ScubaMaskOutlineIcon = ({
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
		<path d="M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1-2.5 2.5H14a2 2 0 0 1-2-2 2 2 0 1 0-4 0 2 2 0 0 1-2 2h-.5A2.5 2.5 0 0 1 3 12.5V8a1 1 0 0 1 1-1" />
		<path d="M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5-5.5V4" />
	</svg>
)

export default ScubaMaskOutlineIcon
