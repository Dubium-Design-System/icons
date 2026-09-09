import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeLockOutlineIcon = ({
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
		<path d="M5 12H3l9-9 8 8M5 12v7a2 2 0 0 0 2 2h6" />
		<path d="M9 21v-6a2 2 0 0 1 2-2h2c.688 0 1.294.347 1.654.875M17 19a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zm1-1v-1.5a1.5 1.5 0 1 1 3 0V18" />
	</svg>
)

export default HomeLockOutlineIcon
