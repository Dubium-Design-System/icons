import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NetworkOffOutlineIcon = ({
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
		<path d="M6.528 6.536a6 6 0 0 0 7.942 7.933m2.247-1.76A6 6 0 0 0 8.29 4.284" />
		<path d="M12 3q2 .5 2 6 0 .506-.017.968m-.55 3.473Q12.934 14.766 12 15m0-12q-1.405.351-1.822 3.167m-.16 3.838Q10.192 14.549 12 15M6 9h3m4 0h5M3 20h7m4 0h7m-11 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-5v3M3 3l18 18" />
	</svg>
)

export default NetworkOffOutlineIcon
