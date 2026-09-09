import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BedFlatFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M5 8a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 5 8m13-1a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm3 8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z" />
	</svg>
)

export default BedFlatFilledIcon
