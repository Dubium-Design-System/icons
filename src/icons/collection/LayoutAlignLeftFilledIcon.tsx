import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LayoutAlignLeftFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M4 3a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1m14 5a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z" />
	</svg>
)

export default LayoutAlignLeftFilledIcon
