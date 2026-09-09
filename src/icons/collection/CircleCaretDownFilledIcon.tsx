import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleCaretDownFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M15 10H9a1 1 0 0 0-.708 1.707l3 3a1 1 0 0 0 1.415 0l3-3a1 1 0 0 0 0-1.414l-.094-.083A1 1 0 0 0 15 10" />
	</svg>
)

export default CircleCaretDownFilledIcon
