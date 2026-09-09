import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ToggleLeftFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M8 9a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 8 9" />
		<path d="M16 5a7 7 0 0 1 0 14H8A7 7 0 0 1 8 5zm0 2H8a5 5 0 1 0 0 10h8a5 5 0 0 0 0-10" />
	</svg>
)

export default ToggleLeftFilledIcon
