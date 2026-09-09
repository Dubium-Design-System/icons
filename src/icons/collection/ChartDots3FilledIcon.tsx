import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartDots3FilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M18 2a4 4 0 1 1-3.843 5.114L7.862 7.9a3 3 0 0 1-.094.257l6.446 4.431a3 3 0 1 1-.695 4.099l-3.527 1.058Q10 17.872 10 18a4 4 0 1 1-8 0l.005-.2a4 4 0 0 1 7.366-1.954l3.64-1.094.01-.102q.023-.204.074-.4l-6.688-4.6A3 3 0 0 1 2 7l.005-.176a3 3 0 0 1 5.784-.931l6.312-.79A4 4 0 0 1 18 2" />
	</svg>
)

export default ChartDots3FilledIcon
