import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LayoutAlignTopFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M20 3a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm-7 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z" />
	</svg>
)

export default LayoutAlignTopFilledIcon
