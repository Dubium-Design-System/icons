import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ListFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M21 6a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1H10a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1H10a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1M7 5.995v.02c0 1.099-.895 1.99-2 1.99s-2-.891-2-1.99v-.02c0-1.099.895-1.99 2-1.99s2 .891 2 1.99m0 6v.02c0 1.099-.895 1.99-2 1.99s-2-.891-2-1.99v-.02c0-1.099.895-1.99 2-1.99s2 .891 2 1.99m0 6v.02c0 1.099-.895 1.99-2 1.99s-2-.891-2-1.99v-.02c0-1.099.895-1.99 2-1.99s2 .891 2 1.99" />
	</svg>
)

export default ListFilledIcon
