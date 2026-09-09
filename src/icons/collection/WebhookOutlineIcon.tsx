import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WebhookOutlineIcon = ({
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
		<path d="M4.876 13.61A4 4 0 1 0 11 17h6" />
		<path d="M15.066 20.502A4 4 0 1 0 17 13c-.706 0-1.424.179-2 .5L12 8" />
		<path d="M16 8a4 4 0 1 0-8 0c0 1.506.77 2.818 2 3.5L7 17" />
	</svg>
)

export default WebhookOutlineIcon
