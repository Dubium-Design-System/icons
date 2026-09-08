import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Grave2OutlineIcon = ({
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
		<path d="M7 16.17V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v9.171M12 7v5m-2-3h4" />
		<path d="M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2z" />
	</svg>
)

export default Grave2OutlineIcon
