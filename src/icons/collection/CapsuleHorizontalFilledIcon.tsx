import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CapsuleHorizontalFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M15 5H9a7 7 0 1 0 0 14h6a7 7 0 0 0 7-7l-.007-.303A7 7 0 0 0 15 5" />
	</svg>
)

export default CapsuleHorizontalFilledIcon
