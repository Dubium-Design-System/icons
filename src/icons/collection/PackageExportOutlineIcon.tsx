import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PackageExportOutlineIcon = ({
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
		<path d="m12 21-8-4.5v-9L12 3l8 4.5V12m-8 0 8-4.5M12 12v9m0-9L4 7.5M15 18h7m-3-3 3 3-3 3" />
	</svg>
)

export default PackageExportOutlineIcon
