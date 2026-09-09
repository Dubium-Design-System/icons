import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldExclamationOutlineIcon = ({
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
		<path d="M20.986 12.51a9 9 0 1 0-5.71 7.873M3.6 9h16.8M3.6 15h10.9" />
		<path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18m6.5-5v3m0 3v.01" />
	</svg>
)

export default WorldExclamationOutlineIcon
