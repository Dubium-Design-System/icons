import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SocialOffOutlineIcon = ({
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
		<path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m14.57-1.398a2 2 0 0 0 2.83 2.827m-9.287-9.296a3 3 0 1 0 3.765 3.715M12 7v1m-5.3 9.8 2.8-2m7.8 2-2.8-2M3 3l18 18" />
	</svg>
)

export default SocialOffOutlineIcon
