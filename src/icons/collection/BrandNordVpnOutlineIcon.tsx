import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandNordVpnOutlineIcon = ({
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
		<path d="m9.992 15-2.007-3-4.015 8c-2.212-3.061-2.625-7.098-.915-10.463A10.14 10.14 0 0 1 12 4a10.14 10.14 0 0 1 8.945 5.537c1.71 3.365 1.297 7.402-.915 10.463l-4.517-8-1.505 1.5" />
		<path d="m14.5 15-3-6L9 13.5" />
	</svg>
)

export default BrandNordVpnOutlineIcon
