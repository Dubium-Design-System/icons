import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PencilFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="m12.085 6.5 5.415 5.415-8.793 8.792A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707zm5.406-2.698a3.828 3.828 0 0 1 1.716 6.405l-.292.293L13.5 5.085l.293-.292a3.83 3.83 0 0 1 3.698-.991" />
	</svg>
)

export default PencilFilledIcon
