import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceComputerCameraOffOutlineIcon = ({
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
		<path d="M6.15 6.153a7 7 0 0 0 9.696 9.696m2-2a7 7 0 0 0-9.699-9.695" />
		<path d="M9.13 9.122a3 3 0 0 0 3.743 3.749m2-2a3 3 0 0 0-3.737-3.736M8 16l-2.091 3.486A1 1 0 0 0 6.766 21h10.468a1 1 0 0 0 .857-1.514L16 16M3 3l18 18" />
	</svg>
)

export default DeviceComputerCameraOffOutlineIcon
