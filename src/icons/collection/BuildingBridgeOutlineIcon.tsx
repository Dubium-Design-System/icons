import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BuildingBridgeOutlineIcon = ({
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
		<path d="M6 5v14M18 5v14M2 15h20M3 8a7.5 7.5 0 0 0 3-2 6.5 6.5 0 0 0 12 0 7.5 7.5 0 0 0 3 2m-9 2v5" />
	</svg>
)

export default BuildingBridgeOutlineIcon
