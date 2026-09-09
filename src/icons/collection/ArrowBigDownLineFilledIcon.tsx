import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowBigDownLineFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="m9 5-.117.007A1 1 0 0 0 8 6v4.999L5.414 11A2 2 0 0 0 4 14.414L10.586 21a2 2 0 0 0 2.828 0L20 14.414a2 2 0 0 0 .434-2.18l-.068-.145A2 2 0 0 0 18.586 11L16 10.999V6a1 1 0 0 0-1-1zm6-3a1 1 0 0 1 .117 1.993L15 4H9a1 1 0 0 1-.117-1.993L9 2z" />
	</svg>
)

export default ArrowBigDownLineFilledIcon
