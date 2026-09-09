import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SocialOutlineIcon = ({
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
		<path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8-5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-7v4m-5.3 6.8 2.8-2m7.8 2-2.8-2" />
	</svg>
)

export default SocialOutlineIcon
