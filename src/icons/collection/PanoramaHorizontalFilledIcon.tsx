import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PanoramaHorizontalFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M19.31 4.591A2 2 0 0 1 22 6.464v11c0 1.382-1.38 2.38-2.694 1.897-4.879-1.845-9.734-1.845-14.612 0C3.39 19.856 2 18.88 2 17.49V6.458a2 2 0 0 1 2.676-1.87l.025.012.448.162c4.572 1.623 9.123 1.622 13.703-.003z" />
	</svg>
)

export default PanoramaHorizontalFilledIcon
