import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TagMinusOutlineIcon = ({
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
		<path d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
		<path d="m18.898 16.102.699-.699.699-.699a2.41 2.41 0 0 0 0-3.408l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3v5.172a2 2 0 0 0 .586 1.414l7.71 7.71c.471.47 1.087.706 1.704.706M16 19h6" />
	</svg>
)

export default TagMinusOutlineIcon
