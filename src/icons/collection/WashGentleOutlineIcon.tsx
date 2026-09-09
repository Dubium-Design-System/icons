import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WashGentleOutlineIcon = ({
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
		<path d="M3.486 5.965Q3.738 5.996 4 6c.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5.17 0 .339-.014.503-.034" />
		<path d="m3 3 1.721 10.329A2 2 0 0 0 6.694 15h10.612a2 2 0 0 0 1.973-1.671L21 3M5 18h14M5 21h14" />
	</svg>
)

export default WashGentleOutlineIcon
