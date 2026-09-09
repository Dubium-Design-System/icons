import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BarcodeOffOutlineIcon = ({
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
		<path d="M4 7V6c0-.552.224-1.052.586-1.414M4 17v1a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v1m-4 13h2c.551 0 1.05-.223 1.412-.584M5 11h1v2H5zm5 0v2m5-2v.01m4-.01v2M3 3l18 18" />
	</svg>
)

export default BarcodeOffOutlineIcon
