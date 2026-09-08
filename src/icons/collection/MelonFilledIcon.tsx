import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MelonFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M16.77 2.62a1 1 0 0 1 1.436.055A10.96 10.96 0 0 1 21 10.001C21 16.075 16.075 21 10.001 21a10.97 10.97 0 0 1-7.684-3.127 1 1 0 0 1 .008-1.438l4.343-4.153a1 1 0 0 1 1.352-.027 3 3 0 0 0 4.32-4.133 1 1 0 0 1 .088-1.35z" />
	</svg>
)

export default MelonFilledIcon
