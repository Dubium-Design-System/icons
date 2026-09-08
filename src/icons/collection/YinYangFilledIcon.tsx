import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const YinYangFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M8 5.072A8 8 0 0 0 12 20l.2-.005a4 4 0 0 0 0-7.99L12 12a4 4 0 0 1-.2-7.995L12 4a8 8 0 0 0-4 1.072M12 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
		<path d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
	</svg>
)

export default YinYangFilledIcon
