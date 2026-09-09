import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CropPortraitFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M16 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" />
	</svg>
)

export default CropPortraitFilledIcon
