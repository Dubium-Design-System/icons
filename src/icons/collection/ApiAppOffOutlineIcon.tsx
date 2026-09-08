import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ApiAppOffOutlineIcon = ({
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
		<path d="M12 15H5.5a2.5 2.5 0 1 1 0-5H6m9 5v3.5a2.5 2.5 0 1 1-5 0V18m3-9h5.5a2.5 2.5 0 1 1 0 5H18m-9-2V9m.042-3.957A2.5 2.5 0 0 1 14 5.5V6M3 3l18 18" />
	</svg>
)

export default ApiAppOffOutlineIcon
