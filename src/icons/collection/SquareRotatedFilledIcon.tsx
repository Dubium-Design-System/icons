import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SquareRotatedFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="m9.793 2.893-6.9 6.9c-1.172 1.171-1.172 3.243 0 4.414l6.9 6.9c1.171 1.172 3.243 1.172 4.414 0l6.9-6.9c1.172-1.171 1.172-3.243 0-4.414l-6.9-6.9c-1.171-1.172-3.243-1.172-4.414 0" />
	</svg>
)

export default SquareRotatedFilledIcon
