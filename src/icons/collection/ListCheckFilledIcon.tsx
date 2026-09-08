import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ListCheckFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M8.207 3.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 0 1 1.414-1.414L5 5.586l1.793-1.793a1 1 0 0 1 1.414 0m0 6a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 0 1 1.414-1.414l.793.793 1.793-1.793a1 1 0 0 1 1.414 0m0 6a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 0 1 1.414-1.414l.793.793 1.793-1.793a1 1 0 0 1 1.414 0M21 6a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1" />
	</svg>
)

export default ListCheckFilledIcon
