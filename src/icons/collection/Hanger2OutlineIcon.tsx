import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Hanger2OutlineIcon = ({
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
		<path d="m12 9-7.971 4.428A2 2 0 0 0 3 15.177V16a2 2 0 0 0 2 2h1" />
		<path d="M18 18h1a2 2 0 0 0 2-2v-.823a2 2 0 0 0-1.029-1.749L12 9c-1.457-.81-1.993-2.333-2-4a2 2 0 1 1 4 0" />
		<path d="M6 18a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
	</svg>
)

export default Hanger2OutlineIcon
