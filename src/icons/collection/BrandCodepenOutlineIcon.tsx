import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandCodepenOutlineIcon = ({
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
		<path d="m3 15 9 6 9-6-9-6z" />
		<path d="m3 9 9 6 9-6-9-6zm0 0v6m18-6v6M12 3v6m0 6v6" />
	</svg>
)

export default BrandCodepenOutlineIcon
