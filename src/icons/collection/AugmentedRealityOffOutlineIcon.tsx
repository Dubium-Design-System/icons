import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AugmentedRealityOffOutlineIcon = ({
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
		<path d="M4 8V6c0-.557.228-1.061.595-1.424M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2c.558 0 1.062-.228 1.425-.596M12 12.5l.312-.195m2.457-1.536L16 10m-6.775-.765L8 10l4 2.5V17l3.076-1.923M16 12v-2l-4-2.5-.302.189" />
		<path d="M8 10v4.5l4 2.5M3 3l18 18" />
	</svg>
)

export default AugmentedRealityOffOutlineIcon
