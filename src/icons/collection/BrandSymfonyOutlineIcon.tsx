import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandSymfonyOutlineIcon = ({
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
		<path d="M6 13q.687 1 2 1c1.313 0 2-.875 2-1.5 0-1.5-2-1-2-2C8 9.875 8.516 9 9.5 9c2.5 0 1.563 2 5.5 2q1 0 1-1" />
		<path d="M9 17q-.143 1 1 1 2.571 0 3-6c.286-4 1.571-6 3-6q.857 0 1 1" />
		<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a10 10 0 0 1 10 10" />
	</svg>
)

export default BrandSymfonyOutlineIcon
