import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Plant2OutlineIcon = ({
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
		<path d="M2 9a10 10 0 1 0 20 0" />
		<path d="M12 19A10 10 0 0 1 22 9M2 9a10 10 0 0 1 10 10" />
		<path d="M12 4a9.7 9.7 0 0 1 2.99 7.5m-5.98 0A9.7 9.7 0 0 1 12 4" />
	</svg>
)

export default Plant2OutlineIcon
