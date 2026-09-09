import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceImacOffOutlineIcon = ({
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
		<path d="M7 3h13a1 1 0 0 1 1 1v12c0 .28-.115.532-.3.713M17 17H4a1 1 0 0 1-1-1V4c0-.276.112-.526.293-.707M3 13h10m4 0h4M8 21h8m-6-4-.5 4m4.5-4 .5 4M3 3l18 18" />
	</svg>
)

export default DeviceImacOffOutlineIcon
