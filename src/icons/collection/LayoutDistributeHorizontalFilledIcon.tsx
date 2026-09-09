import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LayoutDistributeHorizontalFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M20 3a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM16 8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z" />
	</svg>
)

export default LayoutDistributeHorizontalFilledIcon
