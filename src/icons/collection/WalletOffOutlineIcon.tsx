import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WalletOffOutlineIcon = ({
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
		<path d="M17 8V5a1 1 0 0 0-1-1H8m-3.413.584A2 2 0 0 0 6 8h2m4 0h6a1 1 0 0 1 1 1v3" />
		<path d="M19 19a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6" />
		<path d="M16 12h4v4m-4 0a2 2 0 0 1-2-2M3 3l18 18" />
	</svg>
)

export default WalletOffOutlineIcon
