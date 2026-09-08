import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandGitOutlineIcon = ({
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
		<path d="M15 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-4-4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1-1V9m3 2-2-2m-2-2L9.1 5.1" />
		<path d="m13.446 2.6 7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1-2.892 0l-7.955-7.955a2.045 2.045 0 0 1 0-2.892l7.955-7.955a2.045 2.045 0 0 1 2.892 0" />
	</svg>
)

export default BrandGitOutlineIcon
