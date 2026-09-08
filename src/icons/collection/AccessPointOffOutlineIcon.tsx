import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AccessPointOffOutlineIcon = ({
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
		<path d="m3 3 18 18M14.828 9.172A4 4 0 0 1 16 12m1.657-5.657a8 8 0 0 1 1.635 8.952m-10.124-.467a4 4 0 0 1 0-5.656m-2.831 8.485a8 8 0 0 1 0-11.314" />
	</svg>
)

export default AccessPointOffOutlineIcon
