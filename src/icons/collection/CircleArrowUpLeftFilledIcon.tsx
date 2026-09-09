import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleArrowUpLeftFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M15 8H9l-.117.007-.149.029-.105.035-.113.054-.111.071a1 1 0 0 0-.112.097l-.08.09-.067.096-.052.098-.044.11-.03.112-.017.126L8 15l.007.117A1 1 0 0 0 9 16l.117-.007A1 1 0 0 0 10 15v-3.585l4.293 4.292.094.083a1 1 0 0 0 1.32-1.497L11.415 10H15l.117-.007A1 1 0 0 0 15 8" />
	</svg>
)

export default CircleArrowUpLeftFilledIcon
