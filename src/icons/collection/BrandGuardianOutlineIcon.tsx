import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandGuardianOutlineIcon = ({
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
		<path d="M14 13h6M4 12c0-9.296 9.5-9 9.5-9C10.692 3 9 7.373 9 12s1.763 8.976 4.572 8.976C13.572 20.999 4 22.068 4 12m10.5-9c1.416 0 3.853 1.16 4.5 2v3.5M15 13v8s2.77-.37 4-2v-6m-5.5 8H15M13.5 3h1" />
	</svg>
)

export default BrandGuardianOutlineIcon
