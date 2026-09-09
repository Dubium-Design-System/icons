import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LicenseOffOutlineIcon = ({
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
		<path d="M15 21H6a3 3 0 0 1-3-3v-1h10v2a2 2 0 1 0 4 0v-2m0-4V5a2 2 0 1 1 2 2h-2m2-4H8a3 3 0 0 0-.864.126M5.122 5.151A3 3 0 0 0 5 6v11m6-10h2m-4 4h2M3 3l18 18" />
	</svg>
)

export default LicenseOffOutlineIcon
