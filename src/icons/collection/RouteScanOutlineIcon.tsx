import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RouteScanOutlineIcon = ({
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
		<path d="M3 7V5a2 2 0 0 1 2-2h2M3 17v2a2 2 0 0 0 2 2h2M17 3h2a2 2 0 0 1 2 2v2m-4 14h2a2 2 0 0 0 2-2v-2M7 12V9h3m4 0h3v3" />
		<path d="m7 9 4.414 4.414A2 2 0 0 1 12 14.828V17m5-8-4.414 4.414A2 2 0 0 0 12 14.828V17" />
	</svg>
)

export default RouteScanOutlineIcon
