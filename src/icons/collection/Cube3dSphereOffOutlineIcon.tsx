import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Cube3dSphereOffOutlineIcon = ({
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
		<path d="m6 17.6-2-1.1V14m0-4V7.5l2-1.1m4-2.3L12 3l2 1.1m4 2.3 2 1.1V10m0 4v2m-6 3.9L12 21l-2-1.1m8-11.3 2-1.1M12 12v2.5m0 4V21m0-9-2-1.12M6 8.6 4 7.5M3 3l18 18" />
	</svg>
)

export default Cube3dSphereOffOutlineIcon
