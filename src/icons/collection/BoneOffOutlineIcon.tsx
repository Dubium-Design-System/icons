import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BoneOffOutlineIcon = ({
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
		<path d="m12.5 8.502.38-.38A3 3 0 1 1 18 6a3 3 0 1 1-2.12 5.122l-.372.372M13.5 13.502l-2.378 2.378a3 3 0 1 1-5.117 2.297V18h-.176a3 3 0 1 1 2.298-5.115l2.378-2.378M3 3l18 18" />
	</svg>
)

export default BoneOffOutlineIcon
