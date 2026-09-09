import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RouteAltLeftOutlineIcon = ({
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
		<path d="M8 3H3v5m13-5h5v5" />
		<path d="m3 3 7.536 7.536A5 5 0 0 1 12 14.07V21m6-14.99V6m-2 2.02v-.01M14 10v.01" />
	</svg>
)

export default RouteAltLeftOutlineIcon
