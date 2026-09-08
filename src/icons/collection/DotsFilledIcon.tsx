import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DotsFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M7 12a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 5 10a2 2 0 0 1 2 2m7 0a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 12 10a2 2 0 0 1 2 2m7 0a2 2 0 1 1-4 0q0-.053.005-.102A1.996 1.996 0 0 1 19 10a2 2 0 0 1 2 2" />
	</svg>
)

export default DotsFilledIcon
