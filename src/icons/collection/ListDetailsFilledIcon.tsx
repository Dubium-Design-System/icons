import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ListDetailsFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M22 5a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m-3 4a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1m3 6a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m-3 4a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1M8 3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2l.001-4.051.004-.051A1.996 1.996 0 0 1 4 3zm0 10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2l.001-4.051.004-.051A1.996 1.996 0 0 1 4 13z" />
	</svg>
)

export default ListDetailsFilledIcon
