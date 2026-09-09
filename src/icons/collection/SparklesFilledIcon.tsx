import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SparklesFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M16 19a1 1 0 0 1 0-2 1 1 0 0 0 1-1c0-1.333 2-1.333 2 0a1 1 0 0 0 1 1c1.333 0 1.333 2 0 2a1 1 0 0 0-1 1c0 1.333-2 1.333-2 0a1 1 0 0 0-1-1M3 11a5 5 0 0 0 5-5c0-1.333 2-1.333 2 0a5 5 0 0 0 5 5c1.333 0 1.333 2 0 2a5 5 0 0 0-5 5 1 1 0 0 1-2 0 5 5 0 0 0-5-5c-1.333 0-1.333-2 0-2m13-4a1 1 0 0 1 0-2 1 1 0 0 0 1-1c0-1.333 2-1.333 2 0a1 1 0 0 0 1 1c1.333 0 1.333 2 0 2a1 1 0 0 0-1 1c0 1.333-2 1.333-2 0a1 1 0 0 0-1-1" />
	</svg>
)

export default SparklesFilledIcon
