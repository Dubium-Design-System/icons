import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandLoomOutlineIcon = ({
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
		<path d="M17.464 6.518a6 6 0 1 0-3.023 7.965" />
		<path d="M17.482 17.464a6 6 0 1 0-7.965-3.023" />
		<path d="M6.54 17.482a6 6 0 1 0 3.024-7.965" />
		<path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" />
	</svg>
)

export default BrandLoomOutlineIcon
