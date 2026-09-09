import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ConePlusOutlineIcon = ({
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
		<path d="m18.03 12.022-5.16-9.515a1 1 0 0 0-1.74 0L3 17.497v.5C3 19.657 7.03 21 12 21q.255 0 .508-.005M16 19h6m-3-3v6" />
	</svg>
)

export default ConePlusOutlineIcon
