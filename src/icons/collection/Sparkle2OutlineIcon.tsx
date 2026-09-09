import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Sparkle2OutlineIcon = ({
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
		<path d="M12 3c.375 0 .711.231.846.581l1.65 4.29a2.85 2.85 0 0 0 1.632 1.633l4.291 1.65a.906.906 0 0 1 0 1.692l-4.29 1.65a2.84 2.84 0 0 0-1.633 1.632l-1.65 4.291a.906.906 0 0 1-1.692 0l-1.65-4.29a2.84 2.84 0 0 0-1.632-1.633l-4.291-1.65a.906.906 0 0 1 0-1.692l4.29-1.65a2.84 2.84 0 0 0 1.633-1.632l1.65-4.291A.91.91 0 0 1 12 3" />
	</svg>
)

export default Sparkle2OutlineIcon
