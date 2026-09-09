import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SquareArrowDownFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 5a1 1 0 0 0-1 1v5.585l-2.293-2.292-.094-.083a1 1 0 0 0-1.32 1.497l4 4 .094.083.092.064.098.052.11.044.112.03.126.017L12 17l.117-.007.149-.029.105-.035.113-.054.111-.071a1 1 0 0 0 .112-.097l4-4 .083-.094a1 1 0 0 0-.083-1.32l-.094-.083a1 1 0 0 0-1.32.083L13 13.585V8l-.007-.117A1 1 0 0 0 12 7" />
	</svg>
)

export default SquareArrowDownFilledIcon
