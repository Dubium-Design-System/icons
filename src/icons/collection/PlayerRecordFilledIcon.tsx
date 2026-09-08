import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlayerRecordFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M8 5.072a8 8 0 1 1-3.995 7.213L4 12l.005-.285A8 8 0 0 1 8 5.072" />
	</svg>
)

export default PlayerRecordFilledIcon
