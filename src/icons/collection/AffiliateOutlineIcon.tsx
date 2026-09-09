import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AffiliateOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="m5.931 6.936 1.275 4.249m5.607 5.609 4.251 1.275m-5.381-5.752 5.759-5.759M4 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m13 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m0 13a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m-13-3a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0" />
	</svg>
)

export default AffiliateOutlineIcon
