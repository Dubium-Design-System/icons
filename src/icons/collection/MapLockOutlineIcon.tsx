import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapLockOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
		<path d="M13.004 21.216a2 2 0 0 1-2.417-.316l-4.244-4.243A8 8 0 0 1 17.657 5.343 7.93 7.93 0 0 1 20 11m-3 8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z" />
		<path d="M18 18v-1.5a1.5 1.5 0 1 1 3 0V18" />
	</svg>
)

export default MapLockOutlineIcon
