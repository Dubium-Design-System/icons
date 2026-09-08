import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandHboOutlineIcon = ({
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
		<path d="M2 16V8m4 0v8m-4-4h4m3 4h2a2 2 0 1 0 0-4H9h2a2 2 0 1 0 0-4H9zm10-8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
		<path d="M18 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default BrandHboOutlineIcon
