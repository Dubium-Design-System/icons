import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CarFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M14 5a1 1 0 0 1 .694.28l.087.095L18.48 10H19a3 3 0 0 1 2.995 2.824L22 13v4a1 1 0 0 1-1 1h-1.171a3.001 3.001 0 0 1-5.658 0H9.829a3.001 3.001 0 0 1-5.658 0H3a1 1 0 0 1-1-1v-6l.007-.117.008-.056.017-.078.012-.036.014-.05 2.014-5.034A1 1 0 0 1 5 5zM7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6-9H5.676l-1.2 3H11zm2.52 0H13v3h2.92z" />
	</svg>
)

export default CarFilledIcon
