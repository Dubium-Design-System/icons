import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeExclamationOutlineIcon = ({
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
		<path d="m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h8" />
		<path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.857 1.257M19 16v3m0 3v.01" />
	</svg>
)

export default HomeExclamationOutlineIcon
