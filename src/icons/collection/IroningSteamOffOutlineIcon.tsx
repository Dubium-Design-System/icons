import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const IroningSteamOffOutlineIcon = ({
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
		<path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464.81 4.865a1 1 0 0 1-.821 1.15M16 16H3a7 7 0 0 1 6.056-6.937M13 9h6.8M12 19v2m-4-2-1 2m9-2 1 2M3 3l18 18" />
	</svg>
)

export default IroningSteamOffOutlineIcon
