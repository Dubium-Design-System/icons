import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeEcoOutlineIcon = ({
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
		<path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5" />
		<path d="M9 21v-6a2 2 0 0 1 2-2h2c.325 0 .631.077.902.215M16 22s0-2 3-4" />
		<path d="M19 21a3 3 0 0 1 0-6h3v3a3 3 0 0 1-3 3" />
	</svg>
)

export default HomeEcoOutlineIcon
