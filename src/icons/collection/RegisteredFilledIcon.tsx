import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RegisteredFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 8h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 15v-1h.585l1.708 1.707a1 1 0 0 0 1.414-1.414l-.9-.899A3 3 0 0 0 12 8m0 2a1 1 0 0 1 0 2h-1v-2z" />
	</svg>
)

export default RegisteredFilledIcon
