import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceGamepad3OutlineIcon = ({
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
		<path d="M9 12 6 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zm6 0 3-3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2zm-3 3-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2zm0-6L9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2z" />
	</svg>
)

export default DeviceGamepad3OutlineIcon
