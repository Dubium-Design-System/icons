import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowBadgeDownFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M16.375 6.22 12 9.718l-4.375-3.5A1 1 0 0 0 6 7v6a1 1 0 0 0 .375.78l5 4a1 1 0 0 0 1.25 0l5-4A1 1 0 0 0 18 13V7a1 1 0 0 0-1.625-.78" />
	</svg>
)

export default ArrowBadgeDownFilledIcon
