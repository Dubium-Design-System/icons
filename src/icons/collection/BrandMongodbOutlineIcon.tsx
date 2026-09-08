import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandMongodbOutlineIcon = ({
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
		<path d="M12 3v19m6-10.773c0 3.273-1.812 4.77-6 9.273-4.188-4.503-6-6-6-9.273C6 6.773 9.071 4.3 12 2c2.929 2.3 6 4.773 6 9.227" />
	</svg>
)

export default BrandMongodbOutlineIcon
