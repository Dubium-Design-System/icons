import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BusinessplanOutlineIcon = ({
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
		<path d="M11 6a5 3 0 1 0 10 0 5 3 0 1 0-10 0" />
		<path d="M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6" />
		<path d="M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4" />
		<path d="M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H3m2 0v1m0-8v1" />
	</svg>
)

export default BusinessplanOutlineIcon
