import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleNumber9FilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1 5h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v2l.005.15a2 2 0 0 0 1.838 1.844L11 13h2v2h-2l-.007-.117A1 1 0 0 0 9 15a2 2 0 0 0 1.85 1.995L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15V9l-.005-.15a2 2 0 0 0-1.838-1.844zm0 2v2h-2V9z" />
	</svg>
)

export default CircleNumber9FilledIcon
