import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowBigRightLineFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M12.089 3.634A2 2 0 0 0 11 5.414L10.999 8H6a1 1 0 0 0-1 1v6l.007.117A1 1 0 0 0 6 16l4.999-.001.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434zM3 8a1 1 0 0 1 .993.883L4 9v6a1 1 0 0 1-1.993.117L2 15V9a1 1 0 0 1 1-1" />
	</svg>
)

export default ArrowBigRightLineFilledIcon
