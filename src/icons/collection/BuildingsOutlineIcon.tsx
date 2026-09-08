import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BuildingsOutlineIcon = ({
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
		<path d="M4 21V6c0-1 1-2 2-2h5c1 0 2 1 2 2v15m3-13h2c1 0 2 1 2 2v11M3 21h18m-11-9v.01M10 16v.01M10 8v.01M7 12v.01M7 16v.01M7 8v.01M17 12v.01M17 16v.01" />
	</svg>
)

export default BuildingsOutlineIcon
