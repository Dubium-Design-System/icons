import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BiohazardOffOutlineIcon = ({
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
		<path d="M10.586 10.586a2 2 0 1 0 2.836 2.82" />
		<path d="M11.939 14c0 .173.048.351.056.533v.217a4.75 4.75 0 0 1-4.533 4.745h-.217m-4.75-4.75a4.75 4.75 0 0 1 7.737-3.693" />
		<path d="M16.745 19.495a4.75 4.75 0 0 1-4.69-5.503h-.06m2.538-3.454a4.75 4.75 0 0 1 6.957 3.987v.217m-11.195-3.813a4.75 4.75 0 0 1-2.988-3.64m.66-3.324a5 5 0 0 1 .5-.66l.164-.172m6.718 0a4.75 4.75 0 0 1-.836 7.385M3 3l18 18" />
	</svg>
)

export default BiohazardOffOutlineIcon
