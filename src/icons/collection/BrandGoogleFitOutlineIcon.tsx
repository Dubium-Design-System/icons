import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandGoogleFitOutlineIcon = ({
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
		<path d="M12 8.866 9.267 6.132A3.866 3.866 0 0 0 3.8 11.599l2.733 2.734L12 19.8l8.202-8.201a3.866 3.866 0 0 0-5.469-5.466l-8.201 8.2" />
	</svg>
)

export default BrandGoogleFitOutlineIcon
