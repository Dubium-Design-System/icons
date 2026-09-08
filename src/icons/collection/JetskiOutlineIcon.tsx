import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const JetskiOutlineIcon = ({
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
		<path d="M10 5h1.4a1 1 0 0 1 .882.53L14 8.75" />
		<path d="m3.485 16.94.136.545A2 2 0 0 0 5.561 19H13a10 10 0 0 0 8-4c0-6-5-8-5-8-1.889 2.518-5.852 4-9 4H5a2 2 0 0 0-2 2c0 1.328.163 2.652.485 3.94M3.25 15H21" />
	</svg>
)

export default JetskiOutlineIcon
